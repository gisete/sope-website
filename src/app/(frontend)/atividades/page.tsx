import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Atividade } from '@/payload-types' // You'll need to add this type after generating types

export default async function AtividadesPage() {
  const payload = await getPayload({ config })

  const pageData = (await payload.findGlobal({
    slug: 'atividades',
    depth: 2,
  })) as Atividade

  // If no CMS data, show error
  if (!pageData) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Could not load page data.</p>
      </main>
    )
  }

  const { hero, activityImages } = pageData

  return (
    <main>
      {/* Hero Section - From CMS */}
      <section className="py-12 lg:py-20 pt-8 lg:pt-8">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
            {/* Mobile: Text Second, Desktop: Text First */}
            <div className="flex items-center flex-col lg:items-start text-center lg:text-left flex-shrink-0 w-full lg:w-2/6">
              <h1 className="text-4xl lg:text-6xl xl:text-6xl font-serif mb-4 lg:mb-6 text-brand-warm leading-tight">
                {hero.title}
              </h1>
              {hero.description && (
                <p className="text-base lg:text-lg text-brand-dark leading-relaxed">
                  {hero.description}
                </p>
              )}
            </div>

            {/* Hero Image */}
            <div className="relative h-80 lg:h-96 xl:h-[648px] rounded-sm overflow-hidden w-full">
              {typeof hero.image === 'object' && hero.image?.url && (
                <Image
                  src={hero.image.url}
                  alt={hero.image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-20 lg:space-y-24">
            {/* Activity 1: Comunidade de aprendizagem */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Content Left */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif text-brand-warm mb-2">
                    Comunidade de aprendizagem
                  </h2>
                  <p className="text-lg lg:text-xl text-brand-dark font-medium">25/26</p>
                </div>

                {/* Idades */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">Idades</h3>
                  <p className="text-base text-brand-dark leading-relaxed">
                    Para crianças dos 3 aos 6 anos de idade.
                  </p>
                </div>

                {/* Horário */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">Horário</h3>
                  <div className="space-y-2">
                    <p className="text-base text-brand-dark leading-relaxed">
                      De segunda a quinta-feira das 9:00h às 16:00h e sexta-feira das 9:00h às
                      15:00h
                    </p>
                    <p className="text-base text-brand-dark leading-relaxed">
                      Opção de frequentar duas, três, quatro ou cinco dias por semana
                    </p>
                  </div>
                </div>

                {/* Calendário */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">
                    Calendário das atividades
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">(Referente a ano letivo 2025/2026)</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">
                        Início do ano letivo:
                      </span>
                      <span className="text-brand-dark text-base">8 de Setembro</span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">Pausa de Natal:</span>
                      <span className="text-brand-dark text-base">
                        23 de Dezembro a 2 de Janeiro
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">
                        Pausa da Páscoa:
                      </span>
                      <span className="text-brand-dark text-base">30 de Março a 3 de Abril</span>
                    </div>
                    <div className="flex justify-between items-start py-2">
                      <span className="font-medium text-brand-dark text-base">
                        Fim do ano letivo:
                      </span>
                      <span className="text-brand-dark text-base">30 de Junho</span>
                    </div>
                  </div>
                </div>

                {/* Dia tipo */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">
                    Dia tipo no Sopé
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">9:30h - 10:00h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Bom dia e atividade dirigida
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">10:30h - 11:00h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Lanche da manhã
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">11:00h - 13:00h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Brincadeira livre
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">13:00h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Almoço
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">13:30h - 15:00h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Brincadeira livre
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2">
                      <span className="font-medium text-brand-dark text-base">15:00h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Lanche
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pagamento */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">Pagamento</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">Dia avulso:</span>
                      <span className="text-brand-dark text-base">30€</span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">
                        2 dias por semana:
                      </span>
                      <span className="text-brand-dark text-base">180€ (mensalmente)</span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">
                        3 dias por semana:
                      </span>
                      <span className="text-brand-dark text-base">240€ (mensalmente)</span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">
                        4 dias por semana:
                      </span>
                      <span className="text-brand-dark text-base">270€ (mensalmente)</span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">
                        5 dias por semana:
                      </span>
                      <span className="text-brand-dark text-base">300€ (mensalmente)</span>
                    </div>
                    <div className="flex justify-between items-start py-2">
                      <span className="font-medium text-brand-dark text-base">Inscrição:</span>
                      <span className="text-brand-dark text-base">100€</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    *Irmãos têm desconto de 10% na mensalidade
                  </p>
                  <p className="text-sm text-gray-600">
                    O valor do dia avulso será descontado na inscrição; seguro diário incluído
                  </p>
                  <p className="text-sm text-gray-600">
                    Inscrição inclui seguro anual de acidentes pessoais
                  </p>
                </div>

                {/* Inscrição Button */}
                <div className="pt-4">
                  <a
                    href="https://forms.gle/4Kf8vZCM2rVrzPJK7"
                    target="_blank"
                    className="inline-block px-10 py-4 text-sm font-medium rounded-sm transition-all duration-200 uppercase tracking-wide bg-brand-accent border border-brand-accent text-brand-dark hover:bg-opacity-90"
                  >
                    INSCRIÇÃO
                  </a>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative h-96 lg:h-[500px] rounded-sm overflow-hidden">
                {typeof activityImages.imageSection1 === 'object' &&
                  activityImages.imageSection1?.url && (
                    <Image
                      src={activityImages.imageSection1.url}
                      alt={activityImages.imageSection1.alt}
                      fill
                      className="object-cover"
                    />
                  )}
              </div>
            </div>

            {/* Activity 2: Playgroups para bebés */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Content Left */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif text-brand-warm mb-2">
                    Playgroups para bebés
                  </h2>
                </div>

                {/* Idades */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">Idades</h3>
                  <p className="text-base text-brand-dark leading-relaxed">
                    Para crianças dos 6 meses aos 3 anos de idade, acompanhadas por um cuidador
                  </p>
                </div>

                {/* Horário */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">Horário</h3>
                  <p className="text-base text-brand-dark leading-relaxed">
                    Todas as semanas ao sábado das 10:00h às 12:00h/ das 14h30 às 16h30 ou
                    sexta-feira das 15:00h às 17:00h (os dias são definidos mensalmente e anunciados
                    aqui e nas nossas redes sociais)
                  </p>
                </div>

                {/* Preço */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">
                    Preço da atividade
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">1 sessão:</span>
                      <span className="text-brand-dark text-base">12,5€</span>
                    </div>
                    <div className="flex justify-between items-start py-2">
                      <span className="font-medium text-brand-dark text-base">
                        Pack de 4 sessões:
                      </span>
                      <span className="text-brand-dark text-base">45€</span>
                    </div>
                  </div>
                </div>

                {/* O que os bebés terão oportunidade */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">
                    Nas nossas sessões os vossos bebés terão a oportunidade de:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-brand-warm rounded-full mt-2.5"></span>
                      <span className="text-base text-brand-dark leading-relaxed">
                        Brincar livremente, cultivando a curiosidade e a criatividade
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-brand-warm rounded-full mt-2.5"></span>
                      <span className="text-base text-brand-dark leading-relaxed">
                        Explorar texturas, cores e sons que despertam os sentidos
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-brand-warm rounded-full mt-2.5"></span>
                      <span className="text-base text-brand-dark leading-relaxed">
                        Desenvolver a coordenação motora e o equilíbrio em terrenos irregulares
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-brand-warm rounded-full mt-2.5"></span>
                      <span className="text-base text-brand-dark leading-relaxed">
                        Criar laços fortes com a natureza e com outros bebés
                      </span>
                    </li>
                  </ul>
                </div>

                {/* O que os cuidadores poderão */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">
                    Os cuidadores poderão:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-brand-warm rounded-full mt-2.5"></span>
                      <span className="text-base text-brand-dark leading-relaxed">
                        Partilhar experiências e saberes sobre a parentalidade
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-brand-warm rounded-full mt-2.5"></span>
                      <span className="text-base text-brand-dark leading-relaxed">
                        Observar o desenvolvimento do seu bebé de forma consciente
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Inscrição Button */}
                <div className="pt-4">
                  <a
                    href="https://forms.gle/X1GeZsBYcc6V5fFp9"
                    className="inline-block px-10 py-4 text-sm font-medium rounded-sm transition-all duration-200 uppercase tracking-wide bg-brand-accent border border-brand-accent text-brand-dark hover:bg-opacity-90"
                  >
                    INSCRIÇÃO
                  </a>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative h-96 lg:h-[500px] rounded-sm overflow-hidden">
                {typeof activityImages.imageSection2 === 'object' &&
                  activityImages.imageSection2?.url && (
                    <Image
                      src={activityImages.imageSection2.url}
                      alt={activityImages.imageSection2.alt}
                      fill
                      className="object-cover"
                    />
                  )}
              </div>
            </div>

            {/* Activity 3: Férias no Sopé */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Content Left */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif text-brand-warm mb-2">
                    Férias no Sopé
                  </h2>
                </div>

                {/* Idades */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">Idades</h3>
                  <p className="text-base text-brand-dark leading-relaxed">
                    Para crianças dos 3 aos 10 anos de idade.
                  </p>
                </div>

                {/* Horário */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">Horário</h3>
                  <p className="text-base text-brand-dark leading-relaxed">
                    De segunda a sexta-feira das 9:00h às 16:00h
                  </p>
                </div>

                {/* Calendário */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">
                    Calendário das atividades
                  </h3>
                  <p className="text-base text-brand-dark leading-relaxed">(A definir)</p>
                </div>

                {/* Dia Tipo */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">
                    Dia Tipo de Férias no Sopé
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">9:00h - 9:30h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Acolhimento
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">9:30h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Reunião de bom dia
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">Manhã</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Realização da atividade planeada pelo grupo no primeiro dia da semana
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">10:30h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Lanche da manhã
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">11:00h - 12:30h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Brincadeira livre
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">12:30h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Almoço
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">13:30h - 15:00h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Brincadeira livre
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">15:00h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Lanche da tarde
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-2">
                      <span className="font-medium text-brand-dark text-base">15:30h</span>
                      <span className="text-brand-dark text-base text-right flex-1 ml-4">
                        Reunião de despedida
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pagamento */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-serif text-brand-warm">Pagamento</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="font-medium text-brand-dark text-base">Semana:</span>
                      <span className="text-brand-dark text-base">100€</span>
                    </div>
                    <div className="flex justify-between items-start py-2">
                      <span className="font-medium text-brand-dark text-base">
                        Seguro de acidentes pessoais:
                      </span>
                      <span className="text-brand-dark text-base">20€</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    *Irmãos têm desconto de 8% na mensalidade
                  </p>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative h-96 lg:h-[500px] rounded-sm overflow-hidden">
                {typeof activityImages.imageSection3 === 'object' &&
                  activityImages.imageSection3?.url && (
                    <Image
                      src={activityImages.imageSection3.url}
                      alt={activityImages.imageSection3.alt}
                      fill
                      className="object-cover"
                    />
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
