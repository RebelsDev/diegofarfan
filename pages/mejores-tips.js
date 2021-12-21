/* eslint-disable @next/next/no-html-link-for-pages */
import { ActiveCampaignInputs, handleActiveCampaignSubmit } from 'active-campaign-react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styles from "./../styles/tips.module.scss";
import Footer from "./shared/footer";
import NavBar from "./shared/navbar";
// import getPDF from "./api/getPDF";


export default function Tips(props) {
    const router = useRouter()
    const { register, handleSubmit } = useForm()
    const formId = '3'


    const OnSubmit = async (res) => {
        console.log({ res });
        let data = {
            'firstname': res.firstname,
            'lastname': res.lastname,
            'field[1]': res.field1,
            'email': res.email,
            'phone': res.phone,
        }
        console.log(data);

        handleActiveCampaignSubmit(data, 'diegofarfan', formId)
        router.push('api/getPDF')


    }
    return (
        <div>
            <NavBar />
            <div className={styles.container}>
                {/* <a href="/api/getPDF">aa</a> */}
                <h1>10 tendencias de contenido para marcas de moda</h1>
                {/* <h2>Completa el formulario y obten la guía al instante</h2> */}
                <div className={styles.lead}>
                    <div className={styles.leadimg}>
                        <img src="/img/magnet_reference.jpg" alt="Lead Magnet Zotian" />

                    </div>
                    <div className={styles.leadform}>
                        <div className={styles.form}>
                            <form className={styles.form} onSubmit={handleSubmit(OnSubmit)}>
                                <ActiveCampaignInputs formId={formId} />

                                <label htmlFor="firstname">Nombre</label>
                                <input type="text" id="firstname" name="firstname" placeholder="Ingresa tu nombre" {...register('firstname', { required: true })} required />

                                <label>Apellidos</label>
                                <input type="text" id="lastname" name="lastname" placeholder="Ingresa tu apellido" {...register('lastname', { required: true })} required />

                                <label>País</label>
                                <input type="text" id="field[1]" name="field[1]" placeholder="Ingresa tu país" {...register('field1', { required: true })} required />

                                <label>Email</label>
                                <input name="email" type="email" id="email" placeholder="Ingresa tu correo" {...register('email', { required: true })} required />

                                <label>Teléfono</label>
                                <input name="phone" type="number" id="phone" placeholder="Ingresa tu teléfono" {...register('phone', { required: true })} required />

                                <button type="submit">Descargar</button>


                            </form>
                        </div>

                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}
