import s from './Card.module.scss'



const CreateCard = (props) =>{
    console.log(props)
    return(
        <div style={{width: props.width, minHeight: props.height?props.height:''}} className={s.card}>
            <div className={s.headerCard}>
                <p>
                    {props.header}
                </p>
            </div>
            {props.children}
        </div>
    )
}


export default CreateCard