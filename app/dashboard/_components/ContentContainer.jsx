import { inter } from '@/Assets/fonts';

export default function ContentContainer({children}){
    return(
        <div className={`${inter.className}`} style={{marginTop: "70px", marginLeft: "200px"}}>
            {children}
        </div>
    )
}