package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/mux"
	_ "github.com/mattn/go-sqlite3"
)

type User struct {
	ID        int    `json:"id"`
	Name      string `json:"name"`
	Avatar    string `json:"avatar"`
	Email     string `json:"email"`
	Password  string `json:"-"`
	IsPremium bool   `json:"is_premium"`
}
type Auth struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type Category struct {
	ID     int    `json:"id"`
	UserID int    `json:"-"`
	Name   string `json:"name"`
}

type Task struct {
	ID          int       `json:"id"`
	CategoryID  int       `json:"-"`
	UserID      int       `json:"-"`
	Goal        string    `json:"goal"`
	IsCompleted bool      `json:"is_completed"`
	Deadline    time.Time `json:"deadline"`
	Priority    int       `json:"priority"`
}

type Activity struct {
	Created   []int `json:"created"`
	Completed []int `json:"completed"`
	Deleted   []int `json:"deleted"`
}

type Observation struct {
	Created   string `json:"created"`
	Completed string `json:"completed"`
}

type Fact struct {
	Fact string `json:"fact"`
}

var users = []User{
	{
		ID:        1,
		Name:      "Emily",
		Avatar:    "avatar.png",
		Email:     "emily25@gmail.com",
		Password:  "rlytoughpass",
		IsPremium: false,
	},
	{
		ID:        2,
		Name:      "William",
		Avatar:    "icon",
		Email:     "will2live@gmail.com",
		Password:  "uselesspassword",
		IsPremium: true,
	},
}

var ctgry = []Category{
	{
		ID:     1,
		UserID: 1,
		Name:   "Дом",
	},
	{
		ID:     2,
		UserID: 1,
		Name:   "Семья",
	},
	{
		ID:     3,
		UserID: 1,
		Name:   "Работа",
	},
	{
		ID:     4,
		UserID: 1,
		Name:   "Спорт",
	},
	{
		ID:     1,
		UserID: 2,
		Name:   "Дом",
	},
	{
		ID:     2,
		UserID: 2,
		Name:   "Семья",
	},
	{
		ID:     3,
		UserID: 2,
		Name:   "Работа",
	},
	{
		ID:     4,
		UserID: 2,
		Name:   "Спорт",
	},
}

var tsks = []Task{
	{
		ID:          1,
		CategoryID:  1,
		UserID:      1,
		Goal:        "Полить цветы",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 11, 0, 0, 0, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          2,
		CategoryID:  1,
		UserID:      1,
		Goal:        "Поменять лампочку",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 11, 0, 0, 0, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          3,
		CategoryID:  1,
		UserID:      1,
		Goal:        "Убраться",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 11, 0, 0, 0, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          4,
		CategoryID:  1,
		UserID:      1,
		Goal:        "Приготовить поесть",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 11, 0, 0, 0, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          5,
		CategoryID:  2,
		UserID:      1,
		Goal:        "Позвонить брату",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          6,
		CategoryID:  2,
		UserID:      1,
		Goal:        "Выгулять собаку",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          7,
		CategoryID:  2,
		UserID:      1,
		Goal:        "Взять в долг и не вернуть",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          8,
		CategoryID:  2,
		UserID:      1,
		Goal:        "Отметить день рождения",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          9,
		CategoryID:  3,
		UserID:      1,
		Goal:        "Дописать приложение TODO",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          10,
		CategoryID:  3,
		UserID:      1,
		Goal:        "Изменить файлы стилей",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          11,
		CategoryID:  3,
		UserID:      1,
		Goal:        "Сменить обстановку в офисе",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          12,
		CategoryID:  3,
		UserID:      1,
		Goal:        "Докупить HDD",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          13,
		CategoryID:  4,
		UserID:      1,
		Goal:        "Купить велосипед",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          14,
		CategoryID:  4,
		UserID:      1,
		Goal:        "Выйти на утреннюю пробежку",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          15,
		CategoryID:  4,
		UserID:      1,
		Goal:        "Уйти в запой",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          16,
		CategoryID:  4,
		UserID:      1,
		Goal:        "Сделать вечернюю зарядку",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          17,
		CategoryID:  1,
		UserID:      2,
		Goal:        "Сжечь мусор",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 11, 0, 0, 0, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          18,
		CategoryID:  1,
		UserID:      2,
		Goal:        "Купить диван",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 11, 0, 0, 0, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          19,
		CategoryID:  1,
		UserID:      2,
		Goal:        "Купить цветок",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 11, 0, 0, 0, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          20,
		CategoryID:  1,
		UserID:      2,
		Goal:        "Проснуться в 10:00",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 11, 0, 0, 0, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          21,
		CategoryID:  2,
		UserID:      2,
		Goal:        "Сделать подарок",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          22,
		CategoryID:  2,
		UserID:      2,
		Goal:        "Выгулять кота",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          23,
		CategoryID:  2,
		UserID:      2,
		Goal:        "Семья?",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          24,
		CategoryID:  2,
		UserID:      2,
		Goal:        "Воображение кончилось",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          25,
		CategoryID:  3,
		UserID:      2,
		Goal:        "Устроиться на работу",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          26,
		CategoryID:  3,
		UserID:      2,
		Goal:        "Получить З/П",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          27,
		CategoryID:  3,
		UserID:      2,
		Goal:        "Уволиться",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          28,
		CategoryID:  3,
		UserID:      2,
		Goal:        "Потратить З/П",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          29,
		CategoryID:  4,
		UserID:      2,
		Goal:        "Купить моноцикл",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          30,
		CategoryID:  4,
		UserID:      2,
		Goal:        "Выйти на утреннюю пробежку",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          31,
		CategoryID:  4,
		UserID:      2,
		Goal:        "Купить спорт. инвентарь",
		IsCompleted: true,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
	{
		ID:          32,
		CategoryID:  4,
		UserID:      2,
		Goal:        "Help me",
		IsCompleted: false,
		Deadline:    time.Date(2002, 5, 1, 2, 12, 42, 0, time.UTC),
		Priority:    0,
	},
}

var acitvity = []Activity{}

// Database

var db, _ = sql.Open("sqlite3", "./db.db")

func InitDB(db *sql.DB) error {
	statement, err := db.Prepare(`CREATE TABLE IF NOT EXISTS` + "`user`" + `(
		id INTEGER PRIMARY KEY, 
		name TEXT,
		avatar TEXT,
		email TEXT,
		password TEXT,
		is_premium INTEGER)`)
	if err != nil {
		return err
	}
	statement.Exec()

	statement, err = db.Prepare(`CREATE TABLE IF NOT EXISTS` + "`category`" + `(
		id INTEGER PRIMARY KEY,
		user_id INTEGER,
		name TEXT)`)
	if err != nil {
		return err
	}
	statement.Exec()

	statement, err = db.Prepare(`CREATE TABLE IF NOT EXISTS` + "`task`" + `(
		id INTEGER PRIMARY KEY,
		category_id INTEGER,
		user_id INTEGER,
		goal TEXT
		is_completed INTEGER,
		deadline TEXT,
		priority INTEGER)`)
	if err != nil {
		return err
	}
	statement.Exec()

	statement, err = db.Prepare(`CREATE TABLE IF NOT EXISTS` + "`fact`" + `(
		id INTEGER PRIMARY KEY,
		fact TEXT)`)
	if err != nil {
		return err
	}
	statement.Exec()
	return nil
}

func DBFillFacts(db *sql.DB) error {
	facts := []string{
		"Задачи могут быть выполнены в любое время, даже если они не назначены на определенный день.",
		"Задачи должны быть конкретными и измеримыми, чтобы можно было оценить прогресс и достижение целей.",
		"Задачи должны быть распределены по приоритетам, чтобы не перегружать себя и не терять фокус на самых важных задачах.",
		"Задачи должны быть разбиты на более мелкие подзадачи, чтобы облегчить их выполнение и повысить эффективность.",
		"Задачи должны быть записаны в календарь или список задач, чтобы отслеживать их выполнение и не забывать о них.",
		"Задачи должны быть связаны с целями и стратегиями, чтобы убедиться, что они соответствуют общей картине и помогают достичь желаемого результата.",
		"Задачи должны быть реалистичными и достижимыми, чтобы не создавать ложных ожиданий и не разочаровываться в процессе выполнения.",
		"Задачи должны быть адаптированы к индивидуальным потребностям и возможностям, чтобы каждый мог найти свой подход и успех.",
		"Задачи должны включать в себя отдых и перерывы, чтобы сохранять энергию и фокусироваться на работе.",
		"Задачи должны поощряться и мотивировать, чтобы поддерживать интерес и энтузиазм в работе.",
		"Задачи должны быть гибкими и адаптивными, чтобы учитывать изменения в условиях и задачах.",
		"Задачи должны быть признаны и оценены, чтобы понимать свой прогресс и успехи.",
		"Задачи должны иметь конкретные сроки и дедлайны, чтобы контролировать время и не откладывать работу на потом.",
		"Задачи должны помогать развивать навыки и умения, чтобы улучшать свои компетенции и профессиональные качества.",
		"Задачи должны способствовать улучшению коммуникации и сотрудничества, чтобы работать в команде и достигать общих целей.",
		"Задачи должны учитывать культурные и социальные аспекты, чтобы уважать традиции и обычаи разных групп.",
		"Задачи должны быть направлены на улучшение качества жизни и благополучия, чтобы помогать людям и делать мир лучше.",
		"Человек, который спит 8 часов в день, по статистике, имеет более высокий уровень энергии и концентрации, чем тот, кто спит меньше.",
		"Человек, который занимается спортом 3 раза в неделю, по статистике, имеет более здоровое тело и мозг, чем тот, кто не занимается спортом.",
		"Человек, который читает 30 минут в день, по статистике, лучше запоминает информацию, чем тот, кто не читает.",
		"Человек, который медитирует 10 минут в день, по статистике, более спокоен и устойчив к стрессу, чем тот, кто не медитирует.",
		"Человек, который разговаривает с друзьями и близкими по телефону или в мессенджерах, по статистике, больше общается и поддерживает социальные связи, чем тот, кто общается только через электронную почту.",
	}
	statement, err := db.Prepare("INSERT OR IGNORE INTO `fact` (id, fact) VALUES (?, ?)")
	if err != nil {
		return err
	}
	for i := 0; i < len(facts); i++ {
		_, err = statement.Exec(i+1, facts[i])
		if err != nil {
			return err
		}
	}
	return nil
}

// Everything related to getting user by id

func GetUserById(usrs []User, id int) (User, error) {

	for i := 0; i < len(usrs); i++ {
		if usrs[i].ID == id {
			return usrs[i], nil
		}
	}

	return User{}, nil
}

func GetUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	params := mux.Vars(r)

	id, err := strconv.Atoi(params["user_id"])

	if err != nil {
		panic(err)
	}

	user, err := GetUserById(users, id)

	if err != nil {
		panic(err)
	}

	json.NewEncoder(w).Encode(user)
}

// Everything related for toggling premium for user by id

func TogglePremiumById(usrs *[]User, id int) {
	for i := 0; i < len(*usrs); i++ {
		if (*usrs)[i].ID == id {
			(*usrs)[i].IsPremium = !(*usrs)[i].IsPremium
		}
	}
}

func TogglePremium(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "PATCH")

	params := mux.Vars(r)

	user_id, err := strconv.Atoi(params["user_id"])

	if err != nil {
		panic(err)
	}

	TogglePremiumById(&users, user_id)
	json.NewEncoder(w).Encode(user_id)
}

// Everything related for editing user by id

func EditUserById(usrs *[]User, usr User, user_id int) {
	for i := 0; i < len(*usrs); i++ {
		if (*usrs)[i].ID == user_id {
			(*usrs)[i].Avatar = usr.Avatar
			(*usrs)[i].Name = usr.Name
			(*usrs)[i].Email = usr.Email
		}
	}
}

func EditUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "PUT")

	var usr User
	json.NewDecoder(r.Body).Decode(&usr)

	params := mux.Vars(r)

	user_id, err := strconv.Atoi(params["user_id"])

	if err != nil {
		panic(err)
	}

	EditUserById(&users, usr, user_id)

	json.NewEncoder(w).Encode(user_id)
}

// Everything related for getting tasks

func GetTasksById(tsks []Task, user_id int, category_id int) []Task {
	tasks := []Task{}
	for i := 0; i < len(tsks); i++ {
		if tsks[i].UserID == user_id && tsks[i].CategoryID == category_id {
			tasks = append(tasks, tsks[i])
		}
	}
	return tasks
}

func GetTasks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	params := mux.Vars(r)

	user_id, err := strconv.Atoi(params["user_id"])

	if err != nil {
		panic(err)
	}

	category_id, err := strconv.Atoi(params["category_id"])

	if err != nil {
		panic(err)
	}

	json.NewEncoder(w).Encode(GetTasksById(tsks, user_id, category_id))
}

// Everything related for posting task

func PostTaskByIds(tsks *[]Task, tsk Task) {
	*tsks = append(*tsks, tsk)
}

func NewTaskId(tsks []Task) int {
	new := 0
	for k := 0; k < len(tsks); k++ {
		if tsks[k].ID > new {
			new = tsks[k].ID
		}
	}
	new++
	return new
}

func PostTask(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")

	var tsk Task
	json.NewDecoder(r.Body).Decode(&tsk)
	tsk.ID = NewTaskId(tsks)
	fmt.Println("PostTask...%d", tsk)
	params := mux.Vars(r)

	user_id, err := strconv.Atoi(params["user_id"])

	if err != nil {
		panic(err)
	}

	category_id, err := strconv.Atoi(params["category_id"])

	if err != nil {
		panic(err)
	}

	tsk.UserID = user_id
	tsk.CategoryID = category_id

	PostTaskByIds(&tsks, tsk)

	json.NewEncoder(w).Encode(tsk)
}

// Everything related for deleting task

func DeleteTaskById(tsks *[]Task, task_id int) {
	for i := 0; i < len(*tsks); i++ {
		if (*tsks)[i].ID == task_id {
			(*tsks) = append((*tsks)[:i], (*tsks)[i+1:]...)
		}
	}
}

func DeleteTask(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "DELETE")

	params := mux.Vars(r)

	task_id, err := strconv.Atoi(params["task_id"])

	if err != nil {
		panic(err)
	}

	DeleteTaskById(&tsks, task_id)
	json.NewEncoder(w).Encode(task_id)
}

// Everything related for toggling task

func ToggleTaskById(tsks *[]Task, task_id int) {
	for i := 0; i < len(*tsks); i++ {
		if (*tsks)[i].ID == task_id {
			(*tsks)[i].IsCompleted = !(*tsks)[i].IsCompleted
		}
	}
}

func ToggleTask(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")

	params := mux.Vars(r)

	task_id, err := strconv.Atoi(params["task_id"])

	if err != nil {
		panic(err)
	}

	ToggleTaskById(&tsks, task_id)
	fmt.Println("Patch $d", task_id)
	json.NewEncoder(w).Encode(task_id)
}

// Everything related for editing task

func EditTaskById(tsks *[]Task, tsk Task, task_id int) {
	for i := 0; i < len(*tsks); i++ {
		if (*tsks)[i].ID == task_id {
			tsk.UserID = (*tsks)[i].UserID
			(*tsks)[i] = tsk
		}
	}
}

func EditTask(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Edit...")
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")

	var tsk Task
	json.NewDecoder(r.Body).Decode(&tsk)

	fmt.Println(tsk)

	params := mux.Vars(r)
	fmt.Println("Edit...%", params["task_id"], params["category_id"])
	task_id, err := strconv.Atoi(params["task_id"])

	if err != nil {
		panic(err)
	}
	category_id, err := strconv.Atoi(params["category_id"])

	if err != nil {
		panic(err)
	}

	tsk.ID = task_id
	tsk.CategoryID = category_id

	EditTaskById(&tsks, tsk, task_id)

	json.NewEncoder(w).Encode(task_id)
}

// Everything related for getting acitvity

func GetActivity(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	params := mux.Vars(r)

	user_id, err := strconv.Atoi(params["user_id"])

	if err != nil {
		panic(err)
	}

	// category_id, err := strconv.Atoi(params["category_id"])

	// if err != nil {
	// 	panic(err)
	// }
	var active = Activity{}

	if user_id > 2 {
		json.NewEncoder(w).Encode(active)
	} else {
		json.NewEncoder(w).Encode(acitvity[user_id-1])
	}

}

func GetFact(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	facts := []Fact{}
	factsRows, err := db.Query(`SELECT fact FROM ` + "`fact`")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	for factsRows.Next() {
		fact := Fact{}
		factsRows.Scan(&fact.Fact)
		facts = append(facts, fact)
	}

	fact := Fact{
		Fact: facts[rand.Intn(len(facts))].Fact,
	}

	json.NewEncoder(w).Encode(fact)
}

func GetObservation(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	params := mux.Vars(r)

	user_id, err := strconv.Atoi(params["user_id"])

	if err != nil {
		panic(err)
	}

	days := []string{
		"Понедельник",
		"Вторник",
		"Среду",
		"Четверг",
		"Пятницу",
		"Субботу",
		"Воскресенье",
	}

	createdMax := 0
	createdMaxIndex := 0
	completedMax := 0
	completedMaxIndex := 0

	if user_id > 2 {
		obsr := Observation{
			Created:   "Больше всего задач вы создаете в " + "Понедельник",
			Completed: "Больше всего задач вы завершаете в " + "Понедельник",
		}
		json.NewEncoder(w).Encode(obsr)
	} else {
		for i := 0; i < len(acitvity[user_id-1].Created); i++ {
			if acitvity[user_id-1].Created[i] > createdMax {
				createdMax = acitvity[user_id-1].Created[i]
				createdMaxIndex = i
			}
			if acitvity[user_id-1].Completed[i] > completedMax {
				completedMax = acitvity[user_id-1].Completed[i]
				completedMaxIndex = i
			}
		}

		obsr := Observation{
			Created:   "Больше всего задач вы создаете в " + days[createdMaxIndex],
			Completed: "Больше всего задач вы завершаете в " + days[completedMaxIndex],
		}

		json.NewEncoder(w).Encode(obsr)
	}

}

// Everything related for getting categories

func GetCategoriesById(ctgrys []Category, user_id int) []Category {
	categories := []Category{}
	for i := 0; i < len(ctgrys); i++ {
		if ctgrys[i].UserID == user_id {
			categories = append(categories, ctgrys[i])
		}
	}
	return categories
}

func GetCategories(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	params := mux.Vars(r)

	user_id, err := strconv.Atoi(params["user_id"])

	if err != nil {
		panic(err)
	}

	json.NewEncoder(w).Encode(GetCategoriesById(ctgry, user_id))
}

// Everything related for posting categories

func PostCategoryById(ctgrys *[]Category, ctgry Category) {
	*ctgrys = append(*ctgrys, ctgry)
}

func NewCategoryId(ctgrys []Category) int {
	new := 0
	for i := 0; i < len(ctgrys); i++ {
		if ctgrys[i].ID > new {
			new = ctgrys[i].ID
		}
	}
	new++
	return new
}

func PostCategory(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")

	var nctgry Category
	json.NewDecoder(r.Body).Decode(&nctgry)
	nctgry.ID = NewCategoryId(ctgry)

	params := mux.Vars(r)

	user_id, err := strconv.Atoi(params["user_id"])

	if err != nil {
		panic(err)
	}

	nctgry.UserID = user_id

	PostCategoryById(&ctgry, nctgry)

	json.NewEncoder(w).Encode(nctgry)
}

// Everything related for deleting categories

func DeleteCategoriesById(ctgrys *[]Category, category_id int) {
	for i := 0; i < len(*ctgrys); i++ {
		if (*ctgrys)[i].ID == category_id {
			*ctgrys = append((*ctgrys)[:i], (*ctgrys)[i+1:]...)
		}
	}
}

// func DeleteTaskByIdInCategory(tsks *[]Task, category_id int) {
// 	fmt.Println("tsksDo...", tsks)
// 	for i := 0; i < len(*tsks); i++ {
// 		if (*tsks)[i].CategoryID == category_id {
// 			(*tsks) = append((*tsks)[:i], (*tsks)[i+1:]...)
// 		}
// 	}
// 	fmt.Println("tsksPosle...", tsks)
// }

func DeleteCategory(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "DELETE")

	params := mux.Vars(r)

	category_id, err := strconv.Atoi(params["category_id"])

	if err != nil {
		panic(err)
	}
	fmt.Println("category_id...", category_id)

	if category_id > 4 {
		//DeleteTaskByIdInCategory(&tsks, category_id)
		DeleteCategoriesById(&ctgry, category_id)

		json.NewEncoder(w).Encode(category_id)
	}

}

func NewUserId(ctgrys []User) int {
	new := 0
	for i := 0; i < len(ctgrys); i++ {
		if ctgrys[i].ID > new {
			new = ctgrys[i].ID
		}
	}
	new++
	return new
}

func PostUserById(ctgrys *[]User, ctgry User) {
	*ctgrys = append(*ctgrys, ctgry)
}

func PostFFFAuth(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")

	var logInfo Auth
	json.NewDecoder(r.Body).Decode(&logInfo)
	fmt.Println("logInfo---", logInfo)
	user := GetUserByInfo(logInfo)

	fmt.Println("user---", user)

	res, err := json.Marshal(user)
	if err != nil {
		fmt.Println("failed to marshal", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	fmt.Println("res---", res)

	w.Write(res)

}

func RegisterPostAuth(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")

	var ONenctgry Auth

	var TempUser User
	json.NewDecoder(r.Body).Decode(&ONenctgry)
	fmt.Println("User---", ONenctgry)
	TempUser.ID = NewUserId(users)

	TempUser.Email = ONenctgry.Email
	TempUser.Password = ONenctgry.Password
	TempUser.Name = "fff"
	TempUser.Avatar = "fff"
	TempUser.IsPremium = false

	PostUserById(&users, TempUser)

	fmt.Println("res---", TempUser)
	json.NewEncoder(w).Encode(TempUser)

}

func GetUserByInfo(logInfo Auth) User {
	for i := 0; i < len(users); i++ {
		if users[i].Email == logInfo.Email && users[i].Password == logInfo.Password {
			return users[i]
		}
	}

	return User{}
}
func PostAuth(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")

	var logInfo Auth
	json.NewDecoder(r.Body).Decode(&logInfo)
	fmt.Println("logInfo---", logInfo)
	user := GetUserByInfo(logInfo)

	fmt.Println("user---", user)

	res, err := json.Marshal(user)
	if err != nil {
		fmt.Println("failed to marshal", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	fmt.Println("res---", res)

	w.Write(res)

}

func Router() *mux.Router {

	router := mux.NewRouter()
	router.HandleFunc("/api/user/{user_id}", GetUser).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/userAuth", PostAuth).Methods("POST", "OPTIONS")

	//router.HandleFunc("/api/userCreate", PostAuth).Methods("POST", "OPTIONS")

	router.HandleFunc("/api/userCreate", RegisterPostAuth).Methods("POST", "OPTIONS")
	//	router.HandleFunc("/api/userAuth/{user_name}/{user_pwd}", LoginAuth).Methods("GET", "OPTIONS")

	router.HandleFunc("/api/togglePremium/{user_id}", TogglePremium).Methods("PATCH", "OPTIONS") // Testing required
	router.HandleFunc("/api/editUser/{user_id}", EditUser).Methods("PUT", "OPTIONS")             // Testing required

	router.HandleFunc("/api/activity/{user_id}/{category_id}", GetActivity).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/fact", GetFact).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/observation/{user_id}/{category_id}", GetObservation).Methods("GET", "OPTIONS")

	router.HandleFunc("/api/category/{user_id}", GetCategories).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/category/{user_id}", PostCategory).Methods("POST", "OPTIONS")            // Testing required
	router.HandleFunc("/api/categoryDel/{category_id}", DeleteCategory).Methods("DELETE", "OPTIONS") // Testing required

	router.HandleFunc("/api/task/{user_id}/{category_id}", GetTasks).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/task/{user_id}/{category_id}", PostTask).Methods("POST")
	router.HandleFunc("/api/task/{task_id}", DeleteTask).Methods("DELETE", "OPTIONS")
	router.HandleFunc("/api/toggleTask/{task_id}", ToggleTask).Methods("POST", "OPTIONS")           // Testing required
	router.HandleFunc("/api/editTask/{category_id}/{task_id}", EditTask).Methods("POST", "OPTIONS") // Testing required
	return router
}

func main() {
	var created1 []int
	var created2 []int

	for i := 0; i < 7; i++ {
		created1 = append(created1, rand.Intn(19)+1)
		created2 = append(created2, rand.Intn(19)+1)
	}

	var completed1 []int
	var completed2 []int

	for i := 0; i < 7; i++ {
		completed1 = append(completed1, rand.Intn(created1[i]))
		completed2 = append(completed2, rand.Intn(created2[i]))
	}

	var deleted1 []int
	var deleted2 []int

	for i := 0; i < 7; i++ {
		deleted1 = append(deleted1, rand.Intn(5))
		deleted2 = append(deleted2, rand.Intn(5))
	}

	acitvity = append(acitvity, Activity{Created: created1, Completed: completed1, Deleted: deleted1})
	acitvity = append(acitvity, Activity{Created: created2, Completed: completed2, Deleted: deleted2})

	err := InitDB(db)
	if err != nil {
		panic(err)
	}

	err = DBFillFacts(db)
	if err != nil {
		panic(err)
	}

	defer func() {
		if err := db.Close(); err != nil {
			fmt.Println("Failed to close SQLite", err)
		}
	}()

	r := Router()
	fmt.Println("Starting the server on port 9000...")

	log.Fatal(http.ListenAndServe("127.0.0.1:9000", r))
}
