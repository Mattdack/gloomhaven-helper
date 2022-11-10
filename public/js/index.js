
// Turn Order: Sortable
// $( function() {
//     $( "#sortable1, #sortable2" ).sortable({
//       connectWith: ".connectedSortable"
//     }).disableSelection();
//   } );

//   Turn Order: Clear Input
const clearBtn = document.getElementById("delInput");
clearBtn.addEventListener("click", event => {
  event.preventDefault();
  let clear = document.getElementByName('turnorder');
  console.log(clear)
  clear.value = '';
})


// public class Player : MonoBehaviour
// {

//   public int maxHealth = 100;
//   public int currentHealth;

//   public HealthBar healthBar;

//   // start is called before the first frame update
//   void Start()
//   {
//     currentHealth = maxHealth;
//     healthBar.SetMaxHealth(maxHealth)
//   }

//   // update is called once per frame
//   void update()
//   {
//     if(InputDeviceInfo.GetKeyDown(KeyCode.Space))
//     {
//       TakeDamage(20);
//     }
//   }

//   void TakeDamage(int damage)
//   {
//     currentHealth -= damage;

//     healthBar.SetHealth(currentHealth);
//   }
// }
// health bar------------------------------
const plusHP = document.querySelector("plusHP")
const minusHP = document.querySelector("minusHP")

function buildmonsterHP() {

  minusHP.addEventListener("click", (e) => {
    const potato = e.target.parentElement.children[3].children[0]
    console.log('id:' + potato);
    potato.innerText = parseInt(potato.innerText) - 1;
  })

  plusHP.addEventListener("click", (e) => {
    const potato = e.target.parentElement.children[3].children[0]
    console.log('id:' + potato);
    potato.innerText = parseInt(potato.innerText) + 1;
  })

}

buildmonsterHP()

// function buildcharacterHP() {

//   minusHP.addEventListener("click", (e) => {
//     const tomato = e.target.parentElement.children[2].children[0]
//     tomato.innerText = parseInt(tomato.innerText) - 1;

//   })

//   plusHP.addEventListener("click", (e) => {
//     const tomato = e.target.parentElement.children[2].children[0]
//     tomato.innerText = parseInt(tomato.innerText) + 1;
//   })

// }

// buildcharacterHP()