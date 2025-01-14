import Image from "next/image";
import '@/Components/LayoutComponents/NavbarProfileMenuOption/NavbarProfileMenuOption.css'
import Link from "next/link";

export default function  NavbarProfileMenuOption({title, image, link, onClick = f=>f}) {
  return (
    <Link href={link}>
      <div className="option-box" onClick={()=>{onClick() }}>
        <Image src={image} alt="option"  height={16} width={16}/>
        <p>{title}</p>
      </div>
    </Link>
  );
}