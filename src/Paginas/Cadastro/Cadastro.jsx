import { useState } from "react";
import CadastroP1 from "./Components/CadastroP1";
import CadastroP2 from "./Components/CadstroP2";

function Cadastro () {
    const [onboarding, setOnboarding] = useState(true)
    const [cadatro1, setCadastro1] = useState({})

    const receivep1data = (data) => {
        setCadastro1(data)
        setOnboarding(false)
    }


    return (
        <>
        {onboarding ? (<CadastroP1 cadasroP1={receivep1data} />) : (<CadastroP2 receivep2data={cadatro1} goback={setOnboarding}/>)}
        </>
    )
}

export default Cadastro