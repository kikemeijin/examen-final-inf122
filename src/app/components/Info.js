import style from './Info.module.css';
function Info({type,Height,Weight,Abilities,Hp,Attack,Defense,Speed}){
    return(
        <div className={style["contenedor-info"]}>
            <h3>About</h3>
            <div className={style.barrita}></div>
            <div className={style.stats}>
                <div className={style.hab}>
                    <p>Type:</p>
                    <p>Height:</p>
                    <p>Weight:</p>
                    <p>Abilities:</p>
                </div>
                <div className={style.text}>
                    <p>{type}</p>
                    <p className={style.tex}>{Height} m</p>
                    <p className={style.tex}>{Weight} kg</p>
                    <p>{Abilities}</p>
                </div>
            </div>
            <h3>Stats</h3>
            <div className={style.stats}>
                <div className={style.hab}>
                    <p>Hp:</p>
                    <p>Attack:</p>
                    <p>Defense:</p>
                    <p>Speed:</p>
                </div>
                <div className={style.text}>
                    <p>{Hp}</p>
                    <p>{Attack}</p>
                    <p>{Defense}</p>
                    <p>{Speed}</p>
                </div>
            </div>
        </div>
    );
}
export default Info;