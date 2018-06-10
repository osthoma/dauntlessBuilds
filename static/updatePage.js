var hashids = new Hashids("dauntlessBuilds");

$(document).ready(function(){

  $('#wrongCodeWarning').css('display', 'none');

  hideAllCells();

  if (decodeUrl == true){
    var selectedItems = hashids.decode(buildString);

    if (selectedItems.length > 0){

      // 0 selectedWeaponType
      // 1 selectedWeapon
      // 2 selectedWeaponCell01
      // 3 selectedWeaponCell01level
      // 4 selectedWeaponCell02
      // 5 selectedWeaponCell02level
      // 6 selectedLantern
      // 7 selectedLanternCell
      // 8 selectedLanternCellLevel
      // 9 selectedHelmet
      // 10 selectedHelmetCell
      // 11 selectedHelmetCellLevel
      // 12 selectedChestplate
      // 13 selectedChestplateCell
      // 14 selectedChestplateCellLevel
      // 15 selectedGauntlets
      // 16 selectedGauntletsCell
      // 17 selectedGauntletsCellLeve
      // 18 selectedGreaves
      // 19 selectedGreavesCell
      // 20 selectedGreavesCellLevel

      $('#typeSelection').val(selectedItems[0]);

      if(selectedItems[0] == '1'){
        showSelectedWeapons('#Hammers');
        $('#Hammers').val(selectedItems[1]);
        updateHammerCells();
      }
      else if(selectedItems[0] == '2'){
        showSelectedWeapons('#Axes');
        $('#Axes').val(selectedItems[1]);
        updateAxeCells();
      }
      else if(selectedItems[0] == '3'){
        showSelectedWeapons('#Swords');
        $('#Swords').val(selectedItems[1]);
        updateSwordCells();
      }
      else if(selectedItems[0] == '4'){
        showSelectedWeapons('#ChainBlades');
        $('#ChainBlades').val(selectedItems[1]);
        updateChainBladeCells();
      }
      else {
        showSelectedWeapons('#WarPikes');
        $('#WarPikes').val(selectedItems[1]);
        updateWarPikeCells();
      }

      $('#lanternSelection').val(selectedItems[6]);

      $('#helmetSelection').val(selectedItems[9]);
      $('#chestplateSelection').val(selectedItems[12]);
      $('#gauntletsSelection').val(selectedItems[15]);
      $('#greavesSelection').val(selectedItems[18]);


      updateEverything();


      $('#weaponCellSelection01').val(selectedItems[2]);
      $('#weaponCellSelection01Level').val(selectedItems[3]);

      $('#weaponCellSelection02').val(selectedItems[4]);
      $('#weaponCellSelection02Level').val(selectedItems[5]);


      $('#lanternCellSelection').val(selectedItems[7]);
      $('#lanternCellSelectionLevel').val(selectedItems[8]);


      $('#helmetCellSelection').val(selectedItems[10]);
      $('#helmetCellSelectionLevel').val(selectedItems[11]);

      $('#chestplateCellSelection').val(selectedItems[13]);
      $('#chestplateCellSelectionLevel').val(selectedItems[14]);

      $('#gauntletsCellSelection').val(selectedItems[16]);
      $('#gauntletsCellSelectionLevel').val(selectedItems[17]);

      $('#greavesCellSelection').val(selectedItems[19]);
      $('#greavesCellSelectionLevel').val(selectedItems[20]);

      updateUrl();
    } else {
      $('#wrongCodeWarning').css('display', 'block');
      showSelectedWeapons('#Hammers');
      updateUrl();
    }
  }
  else {
    showSelectedWeapons('#Hammers');
    updateUrl();
  }
});

function hideAllWeapons(){
  $('#Hammers').css('display', 'none');
  $('#Axes').css('display', 'none');
  $('#Swords').css('display', 'none');
  $('#ChainBlades').css('display', 'none');
  $('#WarPikes').css('display', 'none');
}

function hideAllCells(){
  $('[data-category]').css('display', 'none');
  $('[data-category="Empty"]').css('display', 'block');
}

function updateHammerCells(){
  $('#weaponCellSelection01 option').css('display', 'none');
  $('#weaponCellSelection01 option').each(function(){
    if($( '#Hammers option:selected' ).data("cellslot01") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  $('#weaponCellSelection02 option').css('display', 'none');
  $('#weaponCellSelection02 option').each(function(){
    if($( '#Hammers option:selected' ).data("cellslot02") === $(this).data("category"))
    $(this).css('display', 'block');
  })
}

function updateAxeCells(){
  $('#weaponCellSelection01 option').css('display', 'none');
  $('#weaponCellSelection01 option').each(function(){
    if($( '#Axes option:selected' ).data("cellslot01") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  $('#weaponCellSelection02 option').css('display', 'none');
  $('#weaponCellSelection02 option').each(function(){
    if($( '#Axes option:selected' ).data("cellslot02") === $(this).data("category"))
    $(this).css('display', 'block');
  })
}

function updateSwordCells(){
  $('#weaponCellSelection01 option').css('display', 'none');
  $('#weaponCellSelection01 option').each(function(){
    if($( '#Swords option:selected' ).data("cellslot01") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  $('#weaponCellSelection02 option').css('display', 'none');
  $('#weaponCellSelection02 option').each(function(){
    if($( '#Swords option:selected' ).data("cellslot02") === $(this).data("category"))
    $(this).css('display', 'block');
  })
}

function updateChainBladeCells(){
  $('#weaponCellSelection01 option').css('display', 'none');
  $('#weaponCellSelection01 option').each(function(){
    if($( '#ChainBlades option:selected' ).data("cellslot01") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  $('#weaponCellSelection02 option').css('display', 'none');
  $('#weaponCellSelection02 option').each(function(){
    if($( '#ChainBlades option:selected' ).data("cellslot02") === $(this).data("category"))
    $(this).css('display', 'block');
  })
}

function updateWarPikeCells(){
  $('#weaponCellSelection01 option').css('display', 'none');
  $('#weaponCellSelection01 option').each(function(){
    if($( '#WarPikes option:selected' ).data("cellslot01") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  $('#weaponCellSelection02 option').css('display', 'none');
  $('#weaponCellSelection02 option').each(function(){
    if($( '#WarPikes option:selected' ).data("cellslot02") === $(this).data("category"))
    $(this).css('display', 'block');
  })
}

function selectEmptyWeaponCells(){
  $('[data-category="Empty"]').css('display', 'block');

  $('#weaponCellSelection01 option:first').prop('selected', true).change();
  $('#weaponCellSelection02 option:first').prop('selected', true).change();
}

function updateLanternCells(){
  $('#lanternCellSelection option').css('display', 'none');
  $('#lanternCellSelection option').each(function(){
    if($( '#lanternSelection option:selected' ).data("cellslot") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  $('[data-category="Empty"]').css('display', 'block');

  $('#lanternCellSelection option:first').prop('selected', true).change();
}

function updateHelmetCells(){
  $('#helmetCellSelection option').css('display', 'none');
  $('#helmetCellSelection option').each(function(){
    if($( '#helmetSelection option:selected' ).data("cellslot") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  $('[data-category="Empty"]').css('display', 'block');

  $('#helmetCellSelection option:first').prop('selected', true).change();
}

function updateChestplateCells(){
  $('#chestplateCellSelection option').css('display', 'none');
  $('#chestplateCellSelection option').each(function(){
    if($( '#chestplateSelection option:selected' ).data("cellslot") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  $('[data-category="Empty"]').css('display', 'block');

  $('#chestplateCellSelection option:first').prop('selected', true).change();
}

function updateGauntletsCells(){
  $('#gauntletsCellSelection option').css('display', 'none');
  $('#gauntletsCellSelection option').each(function(){
    if($( '#gauntletsSelection option:selected' ).data("cellslot") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  $('[data-category="Empty"]').css('display', 'block');

  $('#gauntletsCellSelection option:first').prop('selected', true).change();
}

function updateGreavesCells(){
  $('#greavesCellSelection option').css('display', 'none');
  $('#greavesCellSelection option').each(function(){
    if($( '#greavesSelection option:selected' ).data("cellslot") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  $('[data-category="Empty"]').css('display', 'block');

  $('#greavesCellSelection option:first').prop('selected', true).change();
}

function updateEverything(){
  updateHammerCells();
  updateAxeCells(),
  updateSwordCells();
  updateChainBladeCells();
  updateWarPikeCells()

  updateLanternCells();

  updateHelmetCells(),
  updateChestplateCells();
  updateGauntletsCells();
  updateGreavesCells();
}

function showSelectedWeapons(type){
  hideAllWeapons();
  $(type).css('display', 'block')
}

function updateUrl(){
  let selectedWeaponType = $( "#typeSelection option:selected" ).val();

  let selectedWeapon = 0;

  let selectedWeaponCell01 = 0;
  let selectedWeaponCell01level = 0;

  let selectedWeaponCell02 = 0;
  let selectedWeaponCell02level = 0;

  if($( "#typeSelection option:selected" ).val() == '1'){
    selectedWeapon = $( "#Hammers option:selected" ).val();

    selectedWeaponCell01 = $('#weaponCellSelection01 option:selected').val();
    selectedWeaponCell01level = $('#weaponCellSelection01 option:selected').data("amount");

    selectedWeaponCell02 = $('#weaponCellSelection02 option:selected').val();
    selectedWeaponCell02level = $('#weaponCellSelection02 option:selected').data("amount");
  }
  else if($( "#typeSelection option:selected" ).val() == '2'){
    selectedWeapon = $( "#Axes option:selected" ).val();

    selectedWeaponCell01 = $('#weaponCellSelection01 option:selected').val();
    selectedWeaponCell01level = $('#weaponCellSelection01 option:selected').data("amount");

    selectedWeaponCell02 = $('#weaponCellSelection02 option:selected').val();
    selectedWeaponCell02level = $('#weaponCellSelection02 option:selected').data("amount");
  }
  else if($( "#typeSelection option:selected" ).val() == '3'){
    selectedWeapon = $( "#Swords option:selected" ).val();

    selectedWeaponCell01 = $('#weaponCellSelection01 option:selected').val();
    selectedWeaponCell01level = $('#weaponCellSelection01 option:selected').data("amount");

    selectedWeaponCell02 = $('#weaponCellSelection02 option:selected').val();
    selectedWeaponCell02level = $('#weaponCellSelection02 option:selected').data("amount");
  }
  else if($( "#typeSelection option:selected" ).val() == '4'){
    selectedWeapon = $( "#ChainBlades option:selected" ).val();

    selectedWeaponCell01 = $('#weaponCellSelection01 option:selected').val();
    selectedWeaponCell01level = $('#weaponCellSelection01 option:selected').data("amount");

    selectedWeaponCell02 = $('#weaponCellSelection02 option:selected').val();
    selectedWeaponCell02level = $('#weaponCellSelection02 option:selected').data("amount");
  }
  else{
    selectedWeapon = $( "#WarPikes option:selected" ).val();

    selectedWeaponCell01 = $('#weaponCellSelection01 option:selected').val();
    selectedWeaponCell01level = $('#weaponCellSelection01 option:selected').data("amount");

    selectedWeaponCell02 = $('#weaponCellSelection02 option:selected').val();
    selectedWeaponCell02level = $('#weaponCellSelection02 option:selected').data("amount");
  }

  let selectedLantern = $( "#lanternSelection option:selected" ).val();

  let selectedLanternCell = 0;
  let selectedLanternCellLevel = 0;

  selectedLanternCell = $('#lanternCellSelection option:selected').val();
  selectedLanternCellLevel = $('#lanternCellSelection option:selected').data("amount");


  let selectedHelmet = $( "#helmetSelection option:selected" ).val();

  let selectedHelmetCell = 0;
  let selectedHelmetCellLevel = 0;

  selectedHelmetCell = $('#helmetCellSelection option:selected').val();
  selectedHelmetCellLevel = $('#helmetCellSelection option:selected').data("amount");

  let selectedChestplate = $( "#chestplateSelection option:selected" ).val();

  let selectedChestplateCell = 0;
  let selectedChestplateCellLevel = 0;

  selectedChestplateCell = $('#chestplateCellSelection option:selected').val();
  selectedChestplateCellLevel = $('#chestplateCellSelection option:selected').data("amount");


  let selectedGauntlets = $( "#gauntletsSelection option:selected" ).val();

  let selectedGauntletsCell = 0;
  let selectedGauntletsCellLevel = 0;

  selectedGauntletsCell = $('#gauntletsCellSelection option:selected').val();
  selectedGauntletsCellLevel = $('#gauntletsCellSelection option:selected').data("amount");

  let selectedGreaves = $( "#greavesSelection option:selected" ).val();

  let selectedGreavesCell = 0;
  let selectedGreavesCellLevel = 0;

  selectedGreavesCell = $('#greavesCellSelection option:selected').val();
  selectedGreavesCellLevel = $('#greavesCellSelection option:selected').data("amount");

  let hash = hashids.encode(selectedWeaponType, selectedWeapon, selectedWeaponCell01, selectedWeaponCell01level, selectedWeaponCell02, selectedWeaponCell02level, selectedLantern, selectedLanternCell, selectedLanternCellLevel, selectedHelmet, selectedHelmetCell, selectedHelmetCellLevel, selectedChestplate, selectedChestplateCell, selectedChestplateCellLevel, selectedGauntlets, selectedGauntletsCell, selectedGauntletsCellLevel,selectedGreaves, selectedGreavesCell, selectedGreavesCellLevel);
  $( "#permaLink" ).val("http://dauntlessbuilds.com/b/" + hash);
}

$( "#typeSelection" ).change(function() {
  if($( "#typeSelection option:selected" ).val() == '1'){
    updateHammerCells();
    showSelectedWeapons('#Hammers');
  }
  else if($( "#typeSelection option:selected" ).val() == '2'){
    updateAxeCells();
    showSelectedWeapons('#Axes');
  }
  else if($( "#typeSelection option:selected" ).val() == '3'){
    updateSwordCells();
    showSelectedWeapons('#Swords');
  }
  else if($( "#typeSelection option:selected" ).val() == '4'){
    updateChainBladeCells();
    showSelectedWeapons('#ChainBlades');
  }
  else {
    updateWarPikeCells();
    showSelectedWeapons('#WarPikes');
  }
  updateUrl();
}
);

$( "#Hammers" ).change(function() {
  updateHammerCells();
  selectEmptyWeaponCells();
  updateUrl();
});

$( "#Axes" ).change(function() {
  updateAxeCells();
  selectEmptyWeaponCells();
  updateUrl();
});

$( "#Swords" ).change(function() {
  updateSwordCells();
  selectEmptyWeaponCells();
  updateUrl();
});

$( "#ChainBlades" ).change(function() {
  updateChainBladeCells();
  selectEmptyWeaponCells();
  updateUrl();
});

$( "#WarPikes" ).change(function() {
  updateWarPikeCells();
  selectEmptyWeaponCells();
  updateUrl();
});


$( "#lanternSelection" ).change(function() {
  updateLanternCells();
  updateUrl();
});


$( "#helmetSelection" ).change(function() {
  updateHelmetCells();
  updateUrl();
});

$( "#chestplateSelection" ).change(function() {
  updateChestplateCells();
  updateUrl();
});

$( "#gauntletsSelection" ).change(function() {
  updateGauntletsCells();
  updateUrl();
});

$( "#greavesSelection" ).change(function() {
  updateGreavesCells();
  updateUrl();
})



$( "#weaponCellSelection01" ).change(function() {
  updateUrl();
})

$( "#weaponCellSelection02" ).change(function() {
  updateUrl();
})

$( "#lanternCellSelection" ).change(function() {
  updateUrl();
})

$( "#helmetCellSelection" ).change(function() {
  updateUrl();
})

$( "#chestPlateCellSelection" ).change(function() {
  updateUrl();
})

$( "#gauntletsCellSelection" ).change(function() {
  updateUrl();
})

$( "#greavesCellSelection" ).change(function() {
  updateUrl();
});
