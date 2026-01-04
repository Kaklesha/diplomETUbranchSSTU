import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n

.use(initReactI18next)

.init({
	debug:true,
	lng:"en",
	interpolation:{
		escapeValue:false,
	},
	resources:{
		ru:{
			translation:{
				sidebar:{
					logo:"Менеджер заметок",
					categories:"Категории",
					home: "Дом",
					family:"Семья",
					job:"Работа",
					sport:"Спорт",
					add:"Добавить",
					exit:"Выйти"
				},
				header:{
					newtask:"Новая задача",
					greetings:"Удачного дня"
				},
				weekAchievements:{
					title:"Недельные успехи",
					created: "Создано",
					done: "Завершено",
					deleted:"Удалено",
					tasks:"Задачи",
				},
				activeTask:"Активные задачи",
				completedTask:"Завершённые задачи",
				timer:{
					title:"Такс такс такс",
					onWatch:"На часах",
					onDay:"Сегодня у нас",
				},
				observation:"Наблюдения",
				dayFact:"Факт дня",

				chart:"Прогресс график",
			}
		},
		en:{
			translation:{
				sidebar:{
					logo:"Task manager",
					categories:"Categories",
					home: "Home",
					family:"Family",
					job:"Job",
					sport:"Sport",
					add:"Add",
					exit:"Exit"
				},
				header:{
					newtask:"New task",
					greetings:"Have a nice day"
				},
				weekAchievements:{
					title:"Week achievements",
					created: "Created",
					done: "Done",
					deleted:"Deleted",
					tasks:"Tasks",
				},
				activeTask:"Active tasks",
				completedTask:"Completed tasks",
				timer:{
					title:"Well well well",
					onWatch:"On watch we have",
					onDay:"Today is",
				},
				observation:"Observation",
				dayFact:"Day fact",

				chart:"Progress chart",
			}
		}
	}
});
export default i18n;