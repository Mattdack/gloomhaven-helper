const { startCase, update } = require("lodash");

// Turn Order: Sortable
$( function() {
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  } );

//   Turn Order: Clear Input
const delButton = document.querySelectorAll("#delInput");
delBtn.addEventListener("click",event=>{
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
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width = 320;
const height = canvas.height = 480;
const plusHP = document.getElementById("plusHP")
const minusHP = document.getElementById("minusHP")
const monsterHP = document.querySelector("monsterHP")

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";
//  TODO: for each id: let health = 
let health = monsterHP.value;
const healthBarWidth = 200;
const healthBarHeight = 30;
const x = width / 2 - healthBarWidth / 2;
const y = height / 2 - healthBarHeight / 2;

const healthBar = new HealthBar(x, y, healthBarWidth, healthBarHeight, health, "green");

const frame = function() {
  context.clearRect(0, 0, width, height);
  healthBar.show(context);
  requestAnimationFrame(frame);
}

minusHP.onclick = function() {
  health -= 1;
  healthBar.updateHealth(health);
};

plusHP.onclick = function() {
  health += 1;
  healthBar.updateHealth(health);
};

frame();