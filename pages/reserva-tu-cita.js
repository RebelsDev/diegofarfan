import Footer from "./shared/footer";
import NavBar from "./shared/navbar";
import { InlineWidget } from "react-calendly";

export default function Calendly() {
    return (
        <div>
            <NavBar />
            <div className="calendly">
                <h1 style={{ textAlign: "center", color: "#000000" }}>Reserva tu cita</h1>
                <p style={{ textAlign: "center", color: "#000000" }}>Elige la fecha que más se acomode a tu horario</p>

                <InlineWidget url="https://calendly.com/diegofarfan/reserva-una-cita" pageSettings={{
                    // backgroundColor: 'F8D2E1',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: 'ffbc00',
                    textColor: '000000'
                }} />

            </div>

            <Footer />
        </div>
    )
}