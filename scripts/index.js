document.addEventListener('DOMContentLoaded', function() {
   const input = document.querySelector('.main__input');
   const button = document.querySelector('.main__button');
   button.addEventListener('click', handleButtonClick);
   function handleButtonClick(event) {
     event.preventDefault(); // Предотвращаем отправку формы по умолчанию
     const reactivePower = input.value;
     const batteries = batteryCalculate(reactivePower);
     displayBatteryCount(batteries.length);
     descriptionBattery(batteries);
     // Ваша логика для обработки и отображения результатов
     console.log(batteries);
   }
});
function displayBatteryCount(count) {
   const resultText = document.querySelector('.description__value');
   resultText.textContent  = `Кількість батарей: ${count}`;
 }
 function descriptionBattery(result){
   const resultResult = document.querySelector('.description__result');
   resultResult.textContent=`Потрібні батареї з потужністю: ${result} кВАР`
 }
function batteryCalculate(reactivePower) {
   let batteries = [50, 40, 35, 30.8, 30, 25, 20, 15, 12.5, 10, 7.5, 5, 4, 3, 2.5, 1.5, 1];
   let result = [];
   for (let i = 0; i < batteries.length; i++) {
      if (reactivePower>=batteries[i]){
         result.push(batteries[i]);
         reactivePower -= batteries[i];
      };
      if (reactivePower === 0) {
         break;
       }
   }
   return result;
}



