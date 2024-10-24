import "./App.css";
import ListItem from "./ListItem";

function App() {
  return (
    <div className="App">
      <ListItem
        companyName={"Яндекс Крауд"}
        desc={"додуматься засунуть ссылку на макет как картинку это курто"}
        link={
          "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FPUvPHGRa%2B70P1QIsZ4xxsCM%2BIGIkJYl7fj8OhOdIUczJRzzNGmCnPN2EmjDZfYRlq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=A4%20-%201.pdf"
        }
      />
      <ListItem
        companyName={"AT-work"}
        desc={
          "эти черти даже не удосужились дать обратнеую связь, судя по их UI и вцелом работе сайта, есть предположение, что они двойные черти"
        }
        link={
          "https://www.figma.com/design/ZUhwEwudliE4AF3JMDEDkj/Тестовое-задание-At-Work?t=qAvlxVQy9V6ZNBRo-0"
        }
      />
      <ListItem
        companyName={"Hotels.ru"}
        desc={
          "предлагают обучение, на на вопрос можно ли его закончить раньше, так и не ответили"
        }
        link={
          "https://docs.google.com/document/d/1JakBsW9KqVjSfo7mLeXdhkVrVVHf1jLWOU4pXKxqEbs/edit?tab=t.0#heading=h.o5hl5f1ha3p0"
        }
      />
      <ListItem
        companyName={"Genesis"}
        desc={
          "странно, что задание для фуллстека, несовсем понятно кого они ищут"
        }
        link={
          "https://docs.google.com/document/d/16OsL6QxMmWxVUunsaxRqlpMYhmfBn6bHIfHsi8QsIKA/edit?tab=t.0#heading=h.l6t624j3rn3t"
        }
      />
      <ListItem
        companyName={"Rus2"}
        desc={
          "сдеелал хорошо, были мелкие поправки от главного, но их очень быстро исправил, но потом все затихли"
        }
        link={
          "https://www.figma.com/design/IFouinr6FOAblrqCrfpUSf/Creat-страница-Статья?node-id=0-1"
        }
      />
      <ListItem
        companyName={"Дельта"}
        desc={
          "есть одна библиотека, чтобы строить такие графики в одну строчку"
        }
        link={
          "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FmgruDdCnQXIu17kZveXDquVtd5%2FXnQTBBhNKjLXfNGix0yK%2F8bJD2P%2FiydJZPh2tq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=ТЗ_бэк_фронт_диз.docx&nosw=1"
        }
      />
      <ListItem
        companyName={"mindBox"}
        desc={
          "давать тестовое только чтобы иметь возможность откликнуться-это жестко"
        }
        link={
          "https://docs.google.com/document/d/15QkApDkQqtzLSVW7Fpyluwj-BvUIHFXBjvvFCe77Aaw/edit?tab=t.0#heading=h.zavj7sd1thwb"
        }
      />
      <ListItem
        companyName={"Делаем IT"}
        desc={"интересно конечно работать с криптой, но не знаю"}
        link={
          "https://docs.google.com/document/d/1g8if8tbBOrjjl2bqFnOP1dxzwGxf-UsdcGSigz8P7qQ/edit?tab=t.0"
        }
      />
      <ListItem
        companyName={"Onpoint"}
        desc={
          "очень странное тз, кто в 2024 веке использует PS для макетов, ни UI кита, ни дэшборда"
        }
        link={"https://onpoint.ru/dev_task"}
      />
    </div>
  );
}

export default App;
