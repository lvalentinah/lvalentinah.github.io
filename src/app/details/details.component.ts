import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: string | null = '';
  name: string | null = '';
  description: string | null = '';
  src: string | null = '';

  diagnosticImages = [
    {
      id: 1,
      name: 'Síndrome mano pie grado 3',
      src: 'assets/sindromemanopiegrado3.jpg',
      description: 'Es una reacción cutánea severa que se presenta en las palmas de las manos y las plantas de los pies, generalmente como efecto adverso de ciertos tratamientos quimioterapéuticos. Los síntomas incluyen dolor intenso, eritema (enrojecimiento) y descamación severa de la piel, y en casos graves puede haber ampollas que pueden infectarse.'
    },
    {
      id: 2,
      name: 'Plaquetopenia',
      src: 'assets/plaquetopenia.jpg',
      description: 'Es una condición en la que el organismo tiene un bajo recuento de plaquetas, las cuales son esenciales para la coagulación sanguínea. Esto puede producirse por trastornos de la médula ósea o problemas autoinmunitarios. Los síntomas incluyen hematomas fáciles, sangrado prolongado por cortes pequeños, y sangrado en las encías o la nariz.'
    },
    {
      id: 3,
      name: 'Hipotensión arterial',
      src: 'assets/hipotensionarterial.jpg',
      description: 'Ocurre cuando la presión arterial es considerablemente más baja de lo normal, lo que impide que el corazón, el cerebro y otras partes del cuerpo reciban suficiente sangre. Los síntomas incluyen visión borrosa, confusión, mareos, desmayo, náuseas y somnolencia. La presión arterial normal está entre 90/60 mmHg y 120/80 mmHg.'
    },
    {
      id: 4,
      name: 'Hematomas abdominales',
      src: 'assets/hematomas.jpg',
      description: 'Es una acumulación de sangre dentro de la cavidad abdominal, generalmente causada por un traumatismo o hemorragia interna. Los síntomas incluyen dolor y sensibilidad abdominal, hinchazón y en algunos casos un color morado visible en la piel. Si el hematoma es profundo, puede no ser visible pero aún así causar dolor y molestias.'
    },
    {
      id: 5,
      name: 'Fibrilación auricular',
      src: 'assets/fibrilacionAuricular.jpg',
      description: 'Es un tipo de arritmia caracterizada por un ritmo cardíaco irregular y, a menudo, rápido. Esto puede llevar a la formación de coágulos sanguíneos, lo que aumenta el riesgo de accidentes cerebrovasculares y otras complicaciones cardíacas. Los síntomas incluyen palpitaciones, fatiga extrema, dificultad para respirar y dolor en el pecho. La fibrilación auricular puede ser temporal o persistente.'
    },
    {
      id: 6,
      name: 'Insuficiencia renal leve',
      src: 'assets/InsuficienciaRenalLeve.jpg',
      description: 'Es una condición en la que los riñones no pueden filtrar adecuadamente los desechos y el exceso de líquidos del cuerpo. Los síntomas incluyen hinchazón en las piernas y tobillos, dolores de cabeza, picazón, fatiga y producción reducida de orina. En este caso, la función renal disminuye a menos del 15% de lo normal.'
    },
    {
      id: 7,
      name: 'Mal control glicémico',
      src: 'assets/malControlGlicemico.jpg',
      description: 'Se refiere a un nivel elevado y no controlado de glucosa en la sangre, lo que puede estar asociado con la diabetes. Esto puede llevar a complicaciones como daño a los vasos sanguíneos, riñones y nervios. Los síntomas incluyen sed excesiva, aumento de la frecuencia urinaria y fatiga.'
    }
  ];

  medicationImages = [
    {
      id: 8,
      name: 'Capecitabina',
      src: 'assets/capecitabina.jpg',
      description: `
        <strong>Grupo Farmacológico:</strong> Agentes antineoplásicos, análogos de las pirimidinas<br>
        <strong>Indicaciones:</strong><br>
        - Cáncer de mama (en combinación con docetaxel o como monoterapia)<br>
        - Cáncer colorrectal metastásico<br>
        - Cáncer gástrico avanzado<br>
        <strong>Descripción:</strong><br>
        - Nombre Comercial: XELODA<br>
        - Innovador: Roche S.A.<br>
        - Forma farmacéutica: Tabletas<br>
        - Concentración: 500 mg<br>
        - Vía de administración: Oral<br>
        <strong>Posología:</strong> 1,250 mg/m² vía oral, dos veces al día durante 2 semanas, seguido de 1 semana de descanso. Se administra en ciclos de 3 semanas.<br>
        <strong>Efectos Adversos Frecuentes:</strong> Anemia, Diarrea, Náuseas<br>
        <strong>Efectos Adversos Graves:</strong> Linfopenia, Reacción de la piel manos-pies, Leucoencefalopatía tóxica
      `
    },
    {
      id: 9,
      name: 'Cisplatino',
      src: 'assets/cisplatino.jpg',
      description: `
        <strong>Grupo Farmacológico:</strong> Agentes antineoplásicos, compuestos del platino<br>
        <strong>Indicaciones:</strong><br>
        - Cáncer testicular<br>
        - Cáncer de ovario metastásico<br>
        - Cáncer avanzado de vejiga<br>
        <strong>Descripción:</strong><br>
        - Innovador: Fresenius Kabi<br>
        - Nombre comercial: Platinol (sin registro sanitario vigente)<br>
        - Forma farmacéutica: Solución inyectable<br>
        - Concentración: 50 mg/50 mL (1 mg/mL)<br>
        - Vía de administración: Infusión intravenosa<br>
        <strong>Posología:</strong><br>
        - Tumores testiculares: 20 mg/m²/día IV durante 5 días, repetido cada 3 semanas<br>
        - Cáncer de vejiga avanzado: 50-70 mg/m² IV cada 3-4 semanas<br>
        <strong>Efectos Adversos Frecuentes:</strong> Náuseas, Vómitos, Nefrotoxicidad<br>
        <strong>Efectos Adversos Graves:</strong> Ototoxicidad, Supresión de la médula ósea, Daño renal severo
      `
    },
    {
      id: 10,
      name: 'Sitagliptina',
      src: 'assets/sitagliptina.jpg',
      description: `
        <strong>Grupo Farmacológico:</strong> Fármacos usados en diabetes, inhibidores de la dipeptidil peptidasa 4 (DPP-4)<br>
        <strong>Indicaciones:</strong> Mejora del control glucémico en diabetes mellitus tipo 2 (DM2)<br>
        <strong>Descripción:</strong><br>
        - Innovador: Merck Sharp & Dohme LLC<br>
        - Nombre comercial: Januvia<br>
        - Forma farmacéutica: Tabletas recubiertas<br>
        - Concentración: 25 mg, 50 mg, 100 mg<br>
        - Vía de administración: Oral<br>
        <strong>Posología:</strong> 100 mg una vez al día. Ajustar dosis en caso de insuficiencia renal.<br>
        <strong>Efectos Adversos Frecuentes:</strong> Hipoglucemia, Infección de las vías respiratorias superiores, Nasofaringitis<br>
        <strong>Efectos Adversos Graves:</strong> Pancreatitis aguda, Hipersensibilidad grave (anafilaxis, angioedema), Deterioro renal
      `
    },
    {
      id: 11,
      name: 'Rivaroxabán',
      src: 'assets/rivaroxaban.jpg',
      description: `
        <strong>Grupo Farmacológico:</strong> Agentes antitrombóticos, inhibidores directos del factor Xa<br>
        <strong>Indicaciones:</strong> Prevención de ictus, tratamiento de trombosis venosa profunda (TVP), y embolia pulmonar (EP)<br>
        <strong>Descripción:</strong><br>
        - Innovador: Bayer S.A.<br>
        - Nombre comercial: Xarelto<br>
        - Forma farmacéutica: Tabletas recubiertas<br>
        - Concentración: 10 mg, 15 mg, 20 mg<br>
        - Vía de administración: Oral<br>
        <strong>Posología:</strong> 20 mg una vez al día con la cena.<br>
        <strong>Efectos Adversos Frecuentes:</strong> Hematomas, Dolor de espalda, Secreción de herida<br>
        <strong>Efectos Adversos Graves:</strong> Shock anafiláctico, Hemorragia cerebral, Síndrome de Stevens-Johnson
      `
    },
    {
      id: 12,
      name: 'Atorvastatina',
      src: 'assets/ator.jpg',
      description: `
        <strong>Grupo Farmacológico:</strong> Agentes que reducen los lípidos séricos, inhibidores de HMG-CoA reductasa<br>
        <strong>Indicaciones:</strong> Reducción de colesterol y triglicéridos, prevención de enfermedades cardiovasculares<br>
        <strong>Descripción:</strong><br>
        - Innovador: Pfizer<br>
        - Nombre comercial: Lipitor<br>
        - Forma farmacéutica: Tabletas recubiertas<br>
        - Concentración: 10 mg, 20 mg, 40 mg, 80 mg<br>
        - Vía de administración: Oral<br>
        <strong>Posología:</strong> 10 mg a 80 mg una vez al día<br>
        <strong>Efectos Adversos Frecuentes:</strong> Diarrea, Nasofaringitis, Artralgia<br>
        <strong>Efectos Adversos Graves:</strong> Miastenia gravis, Miopatía y rabdomiolisis, Hepatitis o daño severo del hígado
      `
    },
    {
      id: 13,
      name: 'Candesartán',
      src: 'assets/candesartan.jpg',
      description: `
        <strong>Grupo Farmacológico:</strong> Antihipertensivos, antagonistas de los receptores de angiotensina II (ARAs)<br>
        <strong>Indicaciones:</strong> Tratamiento de la hipertensión arterial y la insuficiencia cardíaca<br>
        <strong>Descripción:</strong><br>
        - Nombre comercial: Aprovel<br>
        - Forma farmacéutica: Tabletas<br>
        - Concentración: 4 mg, 8 mg, 16 mg, 32 mg<br>
        - Vía de administración: Oral<br>
        <strong>Posología:</strong> 4 mg a 32 mg una vez al día<br>
        <strong>Efectos Adversos Frecuentes:</strong> Mareos, Edemas periféricos, Hipertrigliceridemia<br>
        <strong>Efectos Adversos Graves:</strong> Función anormal hepática y hepatitis, Angioedema, Neutropenia, leucopenia y agranulocitosis
      `
    },
    {
      id: 14,
      name: 'Ketoconazol',
      src: 'assets/ketoconazol.jpg',
      description: `
        <strong>Grupo Farmacológico:</strong> Antifúngicos<br>
        <strong>Indicaciones:</strong> Tratamiento de infecciones fúngicas, dermatofitosis<br>
        <strong>Descripción:</strong><br>
        - Nombre comercial: Nizoral<br>
        - Forma farmacéutica: Tabletas<br>
        - Concentración: 200 mg<br>
        - Vía de administración: Oral<br>
        <strong>Posología:</strong> 200 mg una vez al día<br>
        <strong>Efectos Adversos Frecuentes:</strong> Náuseas y vómitos, Prurito, Dolor abdominal<br>
        <strong>Efectos Adversos Graves:</strong> Plaquetopenia, Hipotensión ortostática, Eritema multiforme
      `
    },
    {
      id: 15,
      name: 'Diltiazem',
      src: 'assets/diltiazem.jpg',
      description: `
        <strong>Grupo Farmacológico:</strong> Bloqueadores de los canales de calcio<br>
        <strong>Indicaciones:</strong> Tratamiento de hipertensión y arritmias <br>
        <strong>Descripción:</strong><br>
        - Nombre comercial: Cardizem (No tiene registro sanitario vigente) <br>
        - Forma farmacéutica: Tabletas<br>
        - Concentración: 30 mg, 60 mg, 120 mg<br>
        - Vía de administración: Oral<br>
        <strong>Posología:</strong> 30 mg a 120 mg una vez al día <br>
        <strong>Efectos Adversos Frecuentes:</strong> Edema, mareos, dolor de cabeza <br>
        <strong>Efectos Adversos Graves:</strong> Necrólisis epidérmica tóxica,
Insuficiencia cardíaca congestiva,
Anemia hemolítica,

      `
    },
    {
      id: 16,
      name: 'Levotiroxina',
      src: 'assets/levotiroxina.jpg',
      description: `
        <strong>Grupo Farmacológico:</strong> Hormonas tiroideas<br>
        <strong>Indicaciones:</strong> Tratamiento del hipotiroidismo <br>
        <strong>Descripción:</strong><br>
        - Nombre comercial: Euthyrox<br>
        - Forma farmacéutica: Tabletas<br>
        - Concentración: 25 mcg, 50 mcg, 100 mcg
<br>
        - Vía de administración: Oral<br>
        <strong>Posología:</strong>25 mcg a 200 mcg una vez al día
<br>
        <strong>Efectos Adversos Frecuentes:</strong> Angina de pecho,
Insuficiencia cardiaca congestiva,
Artralgia
<br>
        <strong>Efectos Adversos Graves:</strong> Debilidad muscular,
Rash,
Alopecia

      `
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const selectedDiagnostic = this.diagnosticImages.find(item => item.id === id);
    const selectedMedication = this.medicationImages.find(item => item.id === id);

    if (selectedDiagnostic) {
      this.name = selectedDiagnostic.name;
      this.description = selectedDiagnostic.description;
      this.src = selectedDiagnostic.src;
    } else if (selectedMedication) {
      this.name = selectedMedication.name;
      this.description = selectedMedication.description;
      this.src = selectedMedication.src;
    }
  }
}
