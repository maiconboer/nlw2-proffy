import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

const TeacherForm = () => {
  const history = useHistory();

  const [name, setName] = React.useState('');
  const [avatar, setAvatar] = React.useState('');
  const [whatsapp, setWhatsapp] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [cost, setCost] = React.useState('');

  const [scheduleItems, setScheduleItems] = React.useState([
    {week_day: 0, from: '', to: ''}
  ])
  
  function addNewScheduleItem() {

    setScheduleItems([
      ...scheduleItems,
      {week_day: 0, from: '', to: ''}
    ])
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItem = scheduleItems.map((scheduleItem, index) => {
      if(index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    })

    setScheduleItems(updatedScheduleItem)
  }

  function handleCreateClass(event: FormEvent) {
    event.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {

      alert('Cadastro realizado com sucesso!');
      history.push('/');

    }).catch(() => {
      
      alert('Erro no cadastro!');
    })

  //   console.log({
  //     name,
  //     avatar,
  //     whatsapp,
  //     bio,
  //     subject,
  //     cost,
  //     scheduleItems
  //   })
  }


  return (
    <div id="page-teacher-form" className="container">
    <PageHeader 
      title="Que incrível que você quer dar aulas." 
      description="O primeiro passo é preencher este formulário de inscrição."
    />

    <main>
      <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Seus Dados</legend>
            <Input 
              name="name" 
              label="Nome completo" 
              value={name} 
              onChange={({target}) => setName(target.value)}
            />

            <Input 
              name="avatar" 
              label="Avatar"
              value={avatar} 
              onChange={({target}) => setAvatar(target.value)}
            />

            <Input 
              name="whatsapp" 
              label="Whatsapp"
              value={whatsapp} 
              onChange={({target}) => setWhatsapp(target.value)}
            />

            <Textarea 
              name="bio" 
              label="biografia"
              value={bio} 
              onChange={({target}) => setBio(target.value)}
            />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          
            <Select 
              name="subject" 
              label="Matéria" 
              value={subject}
              onChange={({target}) => setSubject(target.value)}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação física', label: 'Educação física' },
                { value: 'Física', label: 'Educação física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />

            <Input 
              name="cost" 
              label="Custo da sua hora por aula" 
              value={cost} 
              onChange={({target}) => setCost(target.value)}
            />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button 
              type="button"
              onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((scheduleItem, index) => (
            <div 
              key={scheduleItem.week_day} 
              className="schedule-item">
            
            <Select 
                name="week_day" 
                label="Dia da semana" 
                value={scheduleItem.week_day}
                onChange={(event) => setScheduleItemValue(index, 'week_day', event.target.value)}
                options={[
                  { value: '0', label: 'Domingo' },
                  { value: '1', label: 'Segunda-feira' },
                  { value: '2', label: 'Terça-feira' },
                  { value: '3', label: 'Quarta-feira' },
                  { value: '4', label: 'Quinta-feira' },
                  { value: '5', label: 'Sexta-feira' },
                  { value: '6', label: 'Sábado' },
                ]}
              />

              <Input 
                name="from" 
                label="Das" 
                type="time" 
                value={scheduleItem.from}
                onChange={(event) => setScheduleItemValue(index, 'from', event.target.value)}
              />

              <Input 
                name="to" 
                label="Até" 
                type="time" 
                value={scheduleItem.to}
                onChange={(event) => setScheduleItemValue(index, 'to', event.target.value)}
              />
          </div>
          ))}
          
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt='Aviso importante!'/>
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="submit">
            Salvar cadastro
          </button>
        </footer>
      </form>
    </main>
  </div>
  )
}

export default TeacherForm;
