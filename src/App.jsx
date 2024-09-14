function App() {
  return (
    <div>
      <h1>My-Big-Project</h1>
      <p>لطفا زبان مورد نظر خود را انتخاب کنید</p>
      <p>Please choose your language</p>
      <div>
        <label htmlFor="farsi">فارسی</label><input type="radio"  id="languge1" name="language"/>
        <label htmlFor="farsi">English</label><input type="radio"  id="language2" name="language" />
      </div>
    </div>
  )
}

export default App
