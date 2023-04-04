import { FooterPerfilPage } from "../../components/Perfil-Page/Footer"
import { HeaderPerfilPage } from "../../components/Perfil-Page/Header"

export const PerfilPage = () => {
    return (
        <>
            <div className="container-body-perfil-page">
                <HeaderPerfilPage></HeaderPerfilPage>
                
                <FooterPerfilPage></FooterPerfilPage>
            </div>
        </>
    )
}