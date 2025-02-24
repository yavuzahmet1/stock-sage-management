// bileşenler arasında state veya side effect'ler gibi mantıkları paylaşmak için kullanılan bir JavaScript fonksiyonudur. Custom hook'lar, React'ın sunduğu useState, useEffect, useContext gibi built-in hook'larını kullanarak özelleştirilmiş mantıklar oluşturmanıza olanak tanır.Bu sayede kod tekrarını azaltır ve mantığı daha modüler hale getirirsiniz.
// 1 - Kod Tekrarını Azaltır.Azaltır
// 2 - Mantığı Soyutlar.
// 3 - Custom hook'lar use ile başlamalıdır.
// 4-JSX döndermez sadece veri veya fonksiyon döner
import { fetchFail, fetchStart, registerSuccess, logoutSuccess, loginSuccess } from '../features/authSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const useAuthCall = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector(state => state.auth)
    const BASE_URL = import.meta.env.VITE_BASE_URL

    const register = async (userInfo) => {

        dispatch(fetchStart())

        try {
            const { data } = await axios.post(`${BASE_URL}users/`, userInfo)
            dispatch(registerSuccess(data))
            navigate("/stock");

        } catch (error) {
            dispatch(fetchFail())
        }
    }

    const logout = async () => {
        dispatch(fetchStart())
        try {
            const { data } = await axios.get(`${BASE_URL}auth/logout`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            dispatch(logoutSuccess())
            navigate("/")

        } catch (error) {
            dispatch(fetchFail())
        }
    }

    const login = async (userLoginInfo) => {
        dispatch(fetchStart())

        try {
            const { data } = await axios.post(`${BASE_URL}auth/login`, userLoginInfo);
            dispatch(loginSuccess(data));
            navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
        }
    }

    return { register, logout, login }
}

export default useAuthCall