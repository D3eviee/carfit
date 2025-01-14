import '@/Components/LoginComponents/BusinessCategory/BusinessCategory.css'
import { inter } from '@/Assets/fonts';
import oklejanie from '@/Assets/images/oklejanie.jpg'
import {FormTitle, TopBar, CategoryTab} from '../LoginUIComponents/LoginUIComponents';

export function BusinessCategory(){
    return(
        <div className={`${inter.className} business-category-container`}>
            <TopBar/>

            <FormTitle title="What’s the type of your business" subtitle="Select the category best represents the services you provide"/>

            <div className='business-category-container-content'>
                <h4>Categories</h4>
                <div className='scroll'>
                    <CategoryTab categoryTitle="Car wrapping" categoryImage={oklejanie} value={"Car wrapping1"}/>
                    <CategoryTab categoryTitle="Car wrapping" categoryImage={oklejanie} value={"Car wrapping2"}/>
                    <CategoryTab categoryTitle="Car wrapping" categoryImage={oklejanie} value={"Car wrapping3"}/>
                    <CategoryTab categoryTitle="Car wrapping" categoryImage={oklejanie} value={"Car wrapping4"}/>
                    <CategoryTab categoryTitle="Car wrapping" categoryImage={oklejanie} value={"Car wrapping5"}/>
                    <CategoryTab categoryTitle="Car wrapping" categoryImage={oklejanie} value={"Car wrapping6"}/>
                </div>
            </div>
        </div> 
    );
}

