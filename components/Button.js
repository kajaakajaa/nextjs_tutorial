import button from '/components/Button.module.css';

export const Button = ()=> {
  function push() {
    alert('kajaa');
  }
  return(
    <button className={button.button} onClick={push}>押してね</button>
  )
}