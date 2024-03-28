import React, {useState} from "react";
import Header from "./Header";
import MainPart from "./MainPart";
import Cart from "./Cart";

function App () {
    const [showCartSection, setCartSection] = useState(false);
    const [shoesAmount, setShoesAmount] = useState("");



    function handleCartSection(){
        setCartSection(!showCartSection);
        console.log("open");
    }

    return (
        <div>
            <Header cartSection={handleCartSection} shoesAmount={shoesAmount}/>
            <MainPart setShoesAmount={setShoesAmount}/>
            { showCartSection && <Cart shoesAmount={shoesAmount} setShoesAmount={setShoesAmount}/>} 
        </div>
    );
}

export default App;