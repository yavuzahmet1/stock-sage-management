// bileşenler arasında state veya side effect'ler gibi mantıkları paylaşmak için kullanılan bir JavaScript fonksiyonudur. Custom hook'lar, React'ın sunduğu useState, useEffect, useContext gibi built-in hook'larını kullanarak özelleştirilmiş mantıklar oluşturmanıza olanak tanır.Bu sayede kod tekrarını azaltır ve mantığı daha modüler hale getirirsiniz.
// 1 - Kod Tekrarını Azaltır.Azaltır
// 2 - Mantığı Soyutlar.
// 3 - Custom hook'lar use ile başlamalıdır.
// 4-JSX döndermez sadece veri veya fonksiyon döner
import React from 'react'
import { fetchFail, fetchStart } from '../features/authSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'


const useAuthCall = () => {

    const dispatch = useDispatch()

    const register = async (userInfo) => {

        dispatch(fetchStart())

        try {
            const { data } = await axios.post("https://16142.fullstack.clarusway.com/users/", userInfo)
            console.log(data)
        } catch (error) {
            dispatch(fetchFail())
        }
    }





    return { register }
}

export default useAuthCall