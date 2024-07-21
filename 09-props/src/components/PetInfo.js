function PetInfo(props) {
    const { animal, age } = props // деструктуризация обекта
    //console.log(props)
    return <h1>My {props.animal} is {props.age} years old</h1>
}
export default PetInfo 