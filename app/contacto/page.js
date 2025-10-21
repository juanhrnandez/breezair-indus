import ContactForm from '../../components/ContactForm'

export const metadata = {
  title: 'Contacto - Breezair Industrial México',
  description: 'Contacta a nuestro equipo para cotizaciones, soporte y consultas técnicas.'
}

export default function Contacto(){
  return (
    <div>
      <section className="section">
        <div className="container-wide grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="heading-1">Contacto</h1>
            <p className="muted mt-2">Completa el formulario y nuestro equipo se pondrá en contacto.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside>
            <h4 className="font-semibold">Información</h4>
            <p className="muted mt-2">ventas@cg.international<br/>soporte@cg.international</p>
            <div className="h-64 bg-light-gray rounded mt-4 flex items-center justify-center">Mapa</div>
          </aside>
        </div>
      </section>
    </div>
  )
}
