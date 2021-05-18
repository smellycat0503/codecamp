import {useRouter} from 'next/router'

export default function RouterPage(){
    const router = useRouter()

    const onClickRouting = () => {

        const value = 'bbb'

        router.push(`/quary/훈이/111/${value}`)

    }

    console.log(router.quary)

    return (
        <button onClick = {onClickRouting}>라우터파일은뭘해</button>
        
    )
}