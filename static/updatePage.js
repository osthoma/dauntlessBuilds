var hashids = new Hashids();

$(document).ready(function(){
  showSelectedWeapons('#Hammers');

  updateUrl();
});
function hideAllWeapons(){
  $('#Hammers').css('display', 'none');
  $('#Axes').css('display', 'none');
  $('#Swords').css('display', 'none');
  $('#ChainBlades').css('display', 'none');
  $('#WarPikes').css('display', 'none');
}

function showSelectedWeapons(type){
  hideAllWeapons();
  $(type).css('display', 'block')
}

function updateUrl(){
  let selectedWeaponType = $( "#typeSelection option:selected" ).val();

  let selectedWeapon;
  if($( "#typeSelection option:selected" ).val() == '1'){
    selectedWeapon = $( "#Hammers option:selected" ).val();
  }
  else if($( "#typeSelection option:selected" ).val() == '2'){
    selectedWeapon = $( "#Axes option:selected" ).val();
  }
  else if($( "#typeSelection option:selected" ).val() == '3'){
    selectedWeapon = $( "#Swords option:selected" ).val();
  }
  else if($( "#typeSelection option:selected" ).val() == '4'){
    selectedWeapon = $( "#ChainBlades option:selected" ).val();
  }
  else{
    selectedWeapon = $( "#WarPikes option:selected" ).val();
  }

  let selectedLantern = $( "#lanternSelection option:selected" ).val();
  let selectedHelmet = $( "#helmetSelection option:selected" ).val();
  let selectedChestplate = $( "#chestplateSelection option:selected" ).val();
  let selectedGauntlets = $( "#gauntletsSelection option:selected" ).val();
  let selectedGreaves = $( "#greavesSelection option:selected" ).val();

  let hash = hashids.encode(selectedWeaponType, selectedWeapon, selectedLantern, selectedHelmet, selectedChestplate, selectedGauntlets, selectedGreaves);
  $( "#permaLink" ).val("http://dauntlessbuilds.com/b/" + hash);
}

$( "#typeSelection" ).change(function() {
  if($( "#typeSelection option:selected" ).val() == '1'){
    showSelectedWeapons('#Hammers');
  }
  else if($( "#typeSelection option:selected" ).val() == '2'){
    showSelectedWeapons('#Axes');
  }
  else if($( "#typeSelection option:selected" ).val() == '3'){
    showSelectedWeapons('#Swords');
  }
  else if($( "#typeSelection option:selected" ).val() == '4'){
    showSelectedWeapons('#ChainBlades');
  }
  else {
    showSelectedWeapons('#WarPikes');
  }
    updateUrl();
}
);
$( "#Hammers" ).change(function() {
  updateUrl();
});
$( "#Axes" ).change(function() {
  updateUrl();
});
$( "#Swords" ).change(function() {
  updateUrl();
});
$( "#ChainBlades" ).change(function() {
  updateUrl();
});
$( "#WarPikes" ).change(function() {
  updateUrl();
});
$( "#weaponSelection" ).change(function() {
  updateUrl();
});
$( "#lanternSelection" ).change(function() {
  updateUrl();
});
$( "#helmetSelection" ).change(function() {
  updateUrl();
});
$( "#chestplateSelection" ).change(function() {
  updateUrl();
});
$( "#gauntletsSelection" ).change(function() {
  updateUrl();
});
$( "#greavesSelection" ).change(function() {
  updateUrl();
});
