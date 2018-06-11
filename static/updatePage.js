let hashids = new Hashids("dauntlessBuilds");

$(document).ready(function(){
  $('#wrongCodeWarning').css('display', 'none');

  hideAllCells();

  if (decodeUrl == true){
    let selectedItems = hashids.decode(buildString);

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


      updateLanternCells();

      updateHelmetCells(),
      updateChestplateCells();
      updateGauntletsCells();
      updateGreavesCells();


      $('#weaponCellSelection01 option').each(function(){
        if($(this).val() == selectedItems[2] && $(this).data("amount") == selectedItems[3]){
          $(this).prop("selected", true);
          return false;
        }
      });

      $('#weaponCellSelection02 option').each(function(){
        if($(this).val() == selectedItems[4] && $(this).data("amount") == selectedItems[5]){
          $(this).prop("selected", true);
          return false;
        }
      });


      $('#lanternCellSelection option').each(function(){
        if($(this).val() == selectedItems[7] && $(this).data("amount") == selectedItems[8]){
          $(this).prop("selected", true);
          return false;
        }
      });


      $('#helmetCellSelection option').each(function(){
        if($(this).val() == selectedItems[10] && $(this).data("amount") == selectedItems[11]){
          $(this).prop("selected", true);
          return false;
        }
      });

      $('#chestplateCellSelection option').each(function(){
        if($(this).val() == selectedItems[13] && $(this).data("amount") == selectedItems[14]){
          $(this).prop("selected", true);
          return false;
        }
      });

      $('#gauntletsCellSelection option').each(function(){
        if($(this).val() == selectedItems[16] && $(this).data("amount") == selectedItems[17]){
          $(this).prop("selected", true);
          return false;
        }
      });

      $('#greavesCellSelection option').each(function(){
        if($(this).val() == selectedItems[19] && $(this).data("amount") == selectedItems[20]){
          $(this).prop("selected", true);
          return false;
        }
      });
    } else {
      $('#wrongCodeWarning').css('display', 'block');
      showSelectedWeapons('#Hammers');
    }
  }
  else {
    showSelectedWeapons('#Hammers');
  }
  updateUrl();
  updateStats();
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

  if($('#Hammers option:selected').data("cellslot01") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }
  if($('#Hammers option:selected').data("cellslot02") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#weaponCellSelection01 option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });

  $('#weaponCellSelection02 option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });
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


  if($('#Axes option:selected').data("cellslot01") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }
  if($('#Axes option:selected').data("cellslot02") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#weaponCellSelection01 option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });

  $('#weaponCellSelection02 option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });
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


  if($('#Swords option:selected').data("cellslot01") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }
  if($('#Swords option:selected').data("cellslot02") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#weaponCellSelection01 option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });

  $('#weaponCellSelection02 option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });
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


  if($('#ChainBlades option:selected').data("cellslot01") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }
  if($('#ChainBlades option:selected').data("cellslot02") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#weaponCellSelection01 option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });

  $('#weaponCellSelection02 option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });
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


  if($('#WarPikes option:selected').data("cellslot01") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }
  if($('#WarPikes option:selected').data("cellslot02") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#weaponCellSelection01 option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });

  $('#weaponCellSelection02 option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });
}

function selectEmptyWeaponCells(){
  $('#weaponCellSelection01 option:first').prop('selected', true).change();
  $('#weaponCellSelection02 option:first').prop('selected', true).change();
}

function updateLanternCells(){
  $('#lanternCellSelection option').css('display', 'none');
  $('#lanternCellSelection option').each(function(){
    if($( '#lanternSelection option:selected' ).data("cellslot") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  if($( '#lanternSelection option:selected' ).data("cellslot") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#lanternCellSelection option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });
}

function updateHelmetCells(){
  $('#helmetCellSelection option').css('display', 'none');
  $('#helmetCellSelection option').each(function(){
    if($( '#helmetSelection option:selected' ).data("cellslot") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  if($( '#helmetSelection option:selected' ).data("cellslot") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#helmetCellSelection option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });
}

function updateChestplateCells(){
  $('#chestplateCellSelection option').css('display', 'none');
  $('#chestplateCellSelection option').each(function(){
    if($( '#chestplateSelection option:selected' ).data("cellslot") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  if($( '#chestplateSelection option:selected' ).data("cellslot") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#chestplateCellSelection option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });
}

function updateGauntletsCells(){
  $('#gauntletsCellSelection option').css('display', 'none');
  $('#gauntletsCellSelection option').each(function(){
    if($( '#gauntletsSelection option:selected' ).data("cellslot") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  if($( '#gauntletsSelection option:selected' ).data("cellslot") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#gauntletsCellSelection option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });
}

function updateGreavesCells(){
  $('#greavesCellSelection option').css('display', 'none');
  $('#greavesCellSelection option').each(function(){
    if($('#greavesSelection option:selected' ).data("cellslot") === $(this).data("category"))
    $(this).css('display', 'block');
  })

  if($( '#greavesSelection option:selected' ).data("cellslot") == "None"){
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#greavesCellSelection option').each(function () {
    if ($(this).css('display') != 'none') {
      $(this).prop("selected", true);
      return false;
    }
  });
}

function updateStats(){
  let stats = [];
  let uniqueEffects = [];

  if($( "#typeSelection option:selected" ).val() == '1'){
    $('#Hammers option:selected').each(function(){
      if($(this).data("bonuses")){
        let bonusString = $(this).data("bonuses");
        if(bonusString != undefined && bonusString != "None"){
          bonusString = bonusString.replace(/'/g, "\"");
          let bonuses = JSON.parse(bonusString);
          let keys = Object.keys(bonuses);
          console.log("keys: " + keys + " bonuses: " + bonuses);
          for (let key in bonuses){
            if (key in stats){
              console.log("exists in stats, prev value: " + stats[key]);
              stats[key] += bonuses[key];
              console.log("value after: " + stats[key]);
            } else {
              console.log("does not exist in stats, value: " + bonuses[key]);
              stats[key] = bonuses[key];
              console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
            }
          }
        }
      }
      if($(this).data("specials")){
        let specialsString = $(this).data("specials");
        if(specialsString == undefined || specialsString == "None"){
          return false;
        }
        specialsString = specialsString.replace(/'/g, "\"");
        let specials = JSON.parse(specialsString);
        for (let key in specials){
          uniqueEffects.push(specials[key]);
          console.log("added " + specials[key] + " to uniqueEffects");
        }
      }
    })
  }
  if($( "#typeSelection option:selected" ).val() == '2'){
    $('#Axes option:selected').each(function(){
      if($(this).data("bonuses")){
        let bonusString = $(this).data("bonuses");
        if(bonusString != undefined && bonusString != "None"){
          bonusString = bonusString.replace(/'/g, "\"");
          let bonuses = JSON.parse(bonusString);
          let keys = Object.keys(bonuses);
          console.log("keys: " + keys + " bonuses: " + bonuses);
          for (let key in bonuses){
            if (key in stats){
              console.log("exists in stats, prev value: " + stats[key]);
              stats[key] += bonuses[key];
              console.log("value after: " + stats[key]);
            } else {
              console.log("does not exist in stats, value: " + bonuses[key]);
              stats[key] = bonuses[key];
              console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
            }
          }
        }
        if($(this).data("specials")){
          let specialsString = $(this).data("specials");
          if(specialsString == undefined || specialsString == "None"){
            return false;
          }
          specialsString = specialsString.replace(/'/g, "\"");
          let specials = JSON.parse(specialsString);
          for (let key in specials){
            uniqueEffects.push(specials[key]);
            console.log("added " + specials[key] + " to uniqueEffects");
          }
        }
      }
    })
  }
  if($( "#typeSelection option:selected" ).val() == '3'){
    $('#Swords option:selected').each(function(){
      if($(this).data("bonuses")){
        let bonusString = $(this).data("bonuses");
        if(bonusString != undefined && bonusString != "None"){
          bonusString = bonusString.replace(/'/g, "\"");
          let bonuses = JSON.parse(bonusString);
          let keys = Object.keys(bonuses);
          console.log("keys: " + keys + " bonuses: " + bonuses);
          for (let key in bonuses){
            if (key in stats){
              console.log("exists in stats, prev value: " + stats[key]);
              stats[key] += bonuses[key];
              console.log("value after: " + stats[key]);
            } else {
              console.log("does not exist in stats, value: " + bonuses[key]);
              stats[key] = bonuses[key];
              console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
            }
          }
        }
        if($(this).data("specials")){
          let specialsString = $(this).data("specials");
          if(specialsString == undefined || specialsString == "None"){
            return false;
          }
          specialsString = specialsString.replace(/'/g, "\"");
          let specials = JSON.parse(specialsString);
          for (let key in specials){
            uniqueEffects.push(specials[key]);
            console.log("added " + specials[key] + " to uniqueEffects");
          }
        }
      }
    })
  }
  if($( "#typeSelection option:selected" ).val() == '4'){
    $('#ChainBlades option:selected').each(function(){
      if($(this).data("bonuses")){
        let bonusString = $(this).data("bonuses");
        if(bonusString != undefined && bonusString != "None"){
          bonusString = bonusString.replace(/'/g, "\"");
          let bonuses = JSON.parse(bonusString);
          let keys = Object.keys(bonuses);
          console.log("keys: " + keys + " bonuses: " + bonuses);
          for (let key in bonuses){
            if (key in stats){
              console.log("exists in stats, prev value: " + stats[key]);
              stats[key] += bonuses[key];
              console.log("value after: " + stats[key]);
            } else {
              console.log("does not exist in stats, value: " + bonuses[key]);
              stats[key] = bonuses[key];
              console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
            }
          }
        }
        if($(this).data("specials")){
          let specialsString = $(this).data("specials");
          if(specialsString == undefined || specialsString == "None"){
            return false;
          }
          specialsString = specialsString.replace(/'/g, "\"");
          let specials = JSON.parse(specialsString);
          for (let key in specials){
            uniqueEffects.push(specials[key]);
            console.log("added " + specials[key] + " to uniqueEffects");
          }
        }
      }
    })
  }
  if($( "#typeSelection option:selected" ).val() == '5'){
    $('#WarPikes option:selected').each(function(){
      if($(this).data("bonuses")){
        let bonusString = $(this).data("bonuses");
        if(bonusString != undefined && bonusString != "None"){
          bonusString = bonusString.replace(/'/g, "\"");
          let bonuses = JSON.parse(bonusString);
          let keys = Object.keys(bonuses);
          console.log("keys: " + keys + " bonuses: " + bonuses);
          for (let key in bonuses){
            if (key in stats){
              console.log("exists in stats, prev value: " + stats[key]);
              stats[key] += bonuses[key];
              console.log("value after: " + stats[key]);
            } else {
              console.log("does not exist in stats, value: " + bonuses[key]);
              stats[key] = bonuses[key];
              console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
            }
          }
        }
        if($(this).data("specials")){
          let specialsString = $(this).data("specials");
          if(specialsString == undefined || specialsString == "None"){
            return false;
          }
          specialsString = specialsString.replace(/'/g, "\"");
          let specials = JSON.parse(specialsString);
          for (let key in specials){
            uniqueEffects.push(specials[key]);
            console.log("added " + specials[key] + " to uniqueEffects");
          }
        }
      }
    })
  }
  $('#lanternSelection option:selected').each(function(){
    if($(this).data("bonuses")){
      let bonusString = $(this).data("bonuses");
      if(bonusString != undefined && bonusString != "None"){
        bonusString = bonusString.replace(/'/g, "\"");
        let bonuses = JSON.parse(bonusString);
        let keys = Object.keys(bonuses);
        console.log("keys: " + keys + " bonuses: " + bonuses);
        for (let key in bonuses){
          if (key in stats){
            console.log("exists in stats, prev value: " + stats[key]);
            stats[key] += bonuses[key];
            console.log("value after: " + stats[key]);
          } else {
            console.log("does not exist in stats, value: " + bonuses[key]);
            stats[key] = bonuses[key];
            console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
          }
        }
      }
    }
  })

  $('#helmetSelection option:selected').each(function(){
    if($(this).data("bonuses")){
      let bonusString = $(this).data("bonuses");
      if(bonusString != undefined && bonusString != "None"){
        bonusString = bonusString.replace(/'/g, "\"");
        let bonuses = JSON.parse(bonusString);
        let keys = Object.keys(bonuses);
        console.log("keys: " + keys + " bonuses: " + bonuses);
        for (let key in bonuses){
          if (key in stats){
            console.log("exists in stats, prev value: " + stats[key]);
            stats[key] += bonuses[key];
            console.log("value after: " + stats[key]);
          } else {
            console.log("does not exist in stats, value: " + bonuses[key]);
            stats[key] = bonuses[key];
            console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
          }
        }
      }
      if($(this).data("specials")){
        let specialsString = $(this).data("specials");
        if(specialsString == undefined || specialsString == "None"){
          return false;
        }
        specialsString = specialsString.replace(/'/g, "\"");
        let specials = JSON.parse(specialsString);
        for (let key in specials){
          uniqueEffects.push(specials[key]);
          console.log("added " + specials[key] + " to uniqueEffects");
        }
      }
    }
  })

  $('#chestplateSelection option:selected').each(function(){
    if($(this).data("bonuses")){
      let bonusString = $(this).data("bonuses");
      if(bonusString != undefined && bonusString != "None"){
        bonusString = bonusString.replace(/'/g, "\"");
        let bonuses = JSON.parse(bonusString);
        let keys = Object.keys(bonuses);
        console.log("keys: " + keys + " bonuses: " + bonuses);
        for (let key in bonuses){
          if (key in stats){
            console.log("exists in stats, prev value: " + stats[key]);
            stats[key] += bonuses[key];
            console.log("value after: " + stats[key]);
          } else {
            console.log("does not exist in stats, value: " + bonuses[key]);
            stats[key] = bonuses[key];
            console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
          }
        }
      }
      if($(this).data("specials")){
        let specialsString = $(this).data("specials");
        if(specialsString == undefined || specialsString == "None"){
          return false;
        }
        specialsString = specialsString.replace(/'/g, "\"");
        let specials = JSON.parse(specialsString);
        for (let key in specials){
          uniqueEffects.push(specials[key]);
          console.log("added " + specials[key] + " to uniqueEffects");
        }
      }
    }
  })

  $('#gauntletsSelection option:selected').each(function(){
    if($(this).data("bonuses")){
      let bonusString = $(this).data("bonuses");
      if(bonusString != undefined && bonusString != "None"){
        bonusString = bonusString.replace(/'/g, "\"");
        let bonuses = JSON.parse(bonusString);
        let keys = Object.keys(bonuses);
        console.log("keys: " + keys + " bonuses: " + bonuses);
        for (let key in bonuses){
          if (key in stats){
            console.log("exists in stats, prev value: " + stats[key]);
            stats[key] += bonuses[key];
            console.log("value after: " + stats[key]);
          } else {
            console.log("does not exist in stats, value: " + bonuses[key]);
            stats[key] = bonuses[key];
            console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
          }
        }
      }
      if($(this).data("specials")){
        let specialsString = $(this).data("specials");
        if(specialsString == undefined || specialsString == "None"){
          return false;
        }
        specialsString = specialsString.replace(/'/g, "\"");
        let specials = JSON.parse(specialsString);
        for (let key in specials){
          uniqueEffects.push(specials[key]);
          console.log("added " + specials[key] + " to uniqueEffects");
        }
      }
    }
  })

  $('#greavesSelection option:selected').each(function(){
    if($(this).data("bonuses")){
      let bonusString = $(this).data("bonuses");
      if(bonusString != undefined && bonusString != "None"){
        bonusString = bonusString.replace(/'/g, "\"");
        let bonuses = JSON.parse(bonusString);
        let keys = Object.keys(bonuses);
        console.log("keys: " + keys + " bonuses: " + bonuses);
        for (let key in bonuses){
          if (key in stats){
            console.log("exists in stats, prev value: " + stats[key]);
            stats[key] += bonuses[key];
            console.log("value after: " + stats[key]);
          } else {
            console.log("does not exist in stats, value: " + bonuses[key]);
            stats[key] = bonuses[key];
            console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
          }
        }
      }
      if($(this).data("specials")){
        let specialsString = $(this).data("specials");
        if(specialsString == undefined || specialsString == "None"){
          return false;
        }
        specialsString = specialsString.replace(/'/g, "\"");
        let specials = JSON.parse(specialsString);
        for (let key in specials){
          uniqueEffects.push(specials[key]);
          console.log("added " + specials[key] + " to uniqueEffects");
        }
      }
    }
  })

  $('#weaponCellSelection01 option:selected').each(function(){
    if($(this).data("bonuses")){
      let bonusString = $(this).data("bonuses");
      if(bonusString != undefined && bonusString != "None"){
        bonusString = bonusString.replace(/'/g, "\"");
        let bonuses = JSON.parse(bonusString);
        let keys = Object.keys(bonuses);
        console.log("keys: " + keys + " bonuses: " + bonuses);
        for (let key in bonuses){
          if (key in stats){
            console.log("exists in stats, prev value: " + stats[key]);
            stats[key] += bonuses[key];
            console.log("value after: " + stats[key]);
          } else {
            console.log("does not exist in stats, value: " + bonuses[key]);
            stats[key] = bonuses[key];
            console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
          }
        }
      }
      if($(this).data("specials")){
        let specialsString = $(this).data("specials");
        if(specialsString == undefined || specialsString == "None"){
          return false;
        }
        specialsString = specialsString.replace(/'/g, "\"");
        let specials = JSON.parse(specialsString);
        for (let key in specials){
          uniqueEffects.push(specials[key]);
          console.log("added " + specials[key] + " to uniqueEffects");
        }
      }
    }
  })
  $('#weaponCellSelection02 option:selected').each(function(){
    if($(this).data("bonuses")){
      let bonusString = $(this).data("bonuses");
      if(bonusString != undefined && bonusString != "None"){
        bonusString = bonusString.replace(/'/g, "\"");
        let bonuses = JSON.parse(bonusString);
        let keys = Object.keys(bonuses);
        console.log("keys: " + keys + " bonuses: " + bonuses);
        for (let key in bonuses){
          if (key in stats){
            console.log("exists in stats, prev value: " + stats[key]);
            stats[key] += bonuses[key];
            console.log("value after: " + stats[key]);
          } else {
            console.log("does not exist in stats, value: " + bonuses[key]);
            stats[key] = bonuses[key];
            console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
          }
        }
      }
      if($(this).data("specials")){
        let specialsString = $(this).data("specials");
        if(specialsString == undefined || specialsString == "None"){
          return false;
        }
        specialsString = specialsString.replace(/'/g, "\"");
        let specials = JSON.parse(specialsString);
        for (let key in specials){
          uniqueEffects.push(specials[key]);
          console.log("added " + specials[key] + " to uniqueEffects");
        }
      }
    }
  })

  $('#lanternCellSelection option:selected').each(function(){
    if($(this).data("bonuses")){
      let bonusString = $(this).data("bonuses");
      if(bonusString != undefined && bonusString != "None"){
        bonusString = bonusString.replace(/'/g, "\"");
        let bonuses = JSON.parse(bonusString);
        let keys = Object.keys(bonuses);
        console.log("keys: " + keys + " bonuses: " + bonuses);
        for (let key in bonuses){
          if (key in stats){
            console.log("exists in stats, prev value: " + stats[key]);
            stats[key] += bonuses[key];
            console.log("value after: " + stats[key]);
          } else {
            console.log("does not exist in stats, value: " + bonuses[key]);
            stats[key] = bonuses[key];
            console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
          }
        }
      }
      if($(this).data("specials")){
        let specialsString = $(this).data("specials");
        if(specialsString == undefined || specialsString == "None"){
          return false;
        }
        specialsString = specialsString.replace(/'/g, "\"");
        let specials = JSON.parse(specialsString);
        for (let key in specials){
          uniqueEffects.push(specials[key]);
          console.log("added " + specials[key] + " to uniqueEffects");
        }
      }
    }
  })

  $('#helmetCellSelection option:selected').each(function(){
    if($(this).data("bonuses")){
      let bonusString = $(this).data("bonuses");
      if(bonusString != undefined && bonusString != "None"){
        bonusString = bonusString.replace(/'/g, "\"");
        let bonuses = JSON.parse(bonusString);
        let keys = Object.keys(bonuses);
        console.log("keys: " + keys + " bonuses: " + bonuses);
        for (let key in bonuses){
          if (key in stats){
            console.log("exists in stats, prev value: " + stats[key]);
            stats[key] += bonuses[key];
            console.log("value after: " + stats[key]);
          } else {
            console.log("does not exist in stats, value: " + bonuses[key]);
            stats[key] = bonuses[key];
            console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
          }
        }
      }
      if($(this).data("specials")){
        let specialsString = $(this).data("specials");
        if(specialsString == undefined || specialsString == "None"){
          return false;
        }
        specialsString = specialsString.replace(/'/g, "\"");
        let specials = JSON.parse(specialsString);
        for (let key in specials){
          uniqueEffects.push(specials[key]);
          console.log("added " + specials[key] + " to uniqueEffects");
        }
      }
    }
  })

  $('#chestplateCellSelection option:selected').each(function(){
    if($(this).data("bonuses")){
      let bonusString = $(this).data("bonuses");
      if(bonusString != undefined && bonusString != "None"){
        bonusString = bonusString.replace(/'/g, "\"");
        let bonuses = JSON.parse(bonusString);
        let keys = Object.keys(bonuses);
        console.log("keys: " + keys + " bonuses: " + bonuses);
        for (let key in bonuses){
          if (key in stats){
            console.log("exists in stats, prev value: " + stats[key]);
            stats[key] += bonuses[key];
            console.log("value after: " + stats[key]);
          } else {
            console.log("does not exist in stats, value: " + bonuses[key]);
            stats[key] = bonuses[key];
            console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
          }
        }
      }
      if($(this).data("specials")){
        let specialsString = $(this).data("specials");
        if(specialsString == undefined || specialsString == "None"){
          return false;
        }
        specialsString = specialsString.replace(/'/g, "\"");
        let specials = JSON.parse(specialsString);
        for (let key in specials){
          uniqueEffects.push(specials[key]);
          console.log("added " + specials[key] + " to uniqueEffects");
        }
      }
    }
  })
  $('#gauntletsCellSelection option:selected').each(function(){
    if($(this).data("bonuses")){
      let bonusString = $(this).data("bonuses");
      if(bonusString != undefined && bonusString != "None"){
        bonusString = bonusString.replace(/'/g, "\"");
        let bonuses = JSON.parse(bonusString);
        let keys = Object.keys(bonuses);
        console.log("keys: " + keys + " bonuses: " + bonuses);
        for (let key in bonuses){
          if (key in stats){
            console.log("exists in stats, prev value: " + stats[key]);
            stats[key] += bonuses[key];
            console.log("value after: " + stats[key]);
          } else {
            console.log("does not exist in stats, value: " + bonuses[key]);
            stats[key] = bonuses[key];
            console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
          }
        }
      }
      if($(this).data("specials")){
        let specialsString = $(this).data("specials");
        if(specialsString == undefined || specialsString == "None"){
          return false;
        }
        specialsString = specialsString.replace(/'/g, "\"");
        let specials = JSON.parse(specialsString);
        for (let key in specials){
          uniqueEffects.push(specials[key]);
          console.log("added " + specials[key] + " to uniqueEffects");
        }
      }
    }
  })
  $('#greavesCellSelection option:selected').each(function(){
    if($(this).data("bonuses")){
      let bonusString = $(this).data("bonuses");
      if(bonusString != undefined && bonusString != "None"){
        bonusString = bonusString.replace(/'/g, "\"");
        let bonuses = JSON.parse(bonusString);
        let keys = Object.keys(bonuses);
        console.log("keys: " + keys + " bonuses: " + bonuses);
        for (let key in bonuses){
          if (key in stats){
            console.log("exists in stats, prev value: " + stats[key]);
            stats[key] += bonuses[key];
            console.log("value after: " + stats[key]);
          } else {
            console.log("does not exist in stats, value: " + bonuses[key]);
            stats[key] = bonuses[key];
            console.log("stats[key]: " + stats[key] + " = " + bonuses[key]);
          }
        }
      }
      if($(this).data("specials")){
        let specialsString = $(this).data("specials");
        if(specialsString == undefined || specialsString == "None"){
          return false;
        }
        specialsString = specialsString.replace(/'/g, "\"");
        let specials = JSON.parse(specialsString);
        for (let key in specials){
          uniqueEffects.push(specials[key]);
          console.log("added " + specials[key] + " to uniqueEffects");
        }
      }
    }
  })



  $('#stats').empty();
  if(Object.keys(stats).length > 0){
    for (const [key, value] of Object.entries(stats)) {
      $('#stats').append('<button type="button" class="btn btn-primary btn-sm btn-block" data-toggle="tooltip" data-placement="bottom" title="Tooltip">' + key + " +" + value + '</button>');
      console.log(key, value);
    }
  } else {
    $('#stats').append('<h6 class="card-subtitle text-muted">No bonuses from items or infusions.</h6>');
  }

  $('#uniqueEffects').empty();
  if(uniqueEffects.length > 0){
    for(let i = 0; i < uniqueEffects.length; i++){
      $('#uniqueEffects').append('<li class="list-group-item">'+ uniqueEffects[i] + '</li>');
    }
  } else {
    $('#uniqueEffects').append('<h6 class="card-subtitle text-muted">No unique effects from items.</h6>');
  }

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
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
  $( "#permaLink" ).val("http://fresh2k.pythonanywhere.com/b/" + hash);
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
  updateStats();
}
);

$( "#Hammers" ).change(function() {
  updateHammerCells();
  updateUrl();
  updateStats();
});

$( "#Axes" ).change(function() {
  updateAxeCells();
  updateUrl();
  updateStats();
});

$( "#Swords" ).change(function() {
  updateSwordCells();
  updateUrl();
  updateStats();
});

$( "#ChainBlades" ).change(function() {
  updateChainBladeCells();
  updateUrl();
  updateStats();
});

$( "#WarPikes" ).change(function() {
  updateWarPikeCells();
  updateUrl();
  updateStats();
});


$( "#lanternSelection" ).change(function() {
  updateLanternCells();
  updateUrl();
  updateStats();
});


$( "#helmetSelection" ).change(function() {
  updateHelmetCells();
  updateUrl();
  updateStats();
});

$( "#chestplateSelection" ).change(function() {
  updateChestplateCells();
  updateUrl();
  updateStats();
});

$( "#gauntletsSelection" ).change(function() {
  updateGauntletsCells();
  updateUrl();
  updateStats();
});

$( "#greavesSelection" ).change(function() {
  updateGreavesCells();
  updateUrl();
  updateStats();
})



$( "#weaponCellSelection01" ).change(function() {
  updateUrl();
  updateStats();
})

$( "#weaponCellSelection02" ).change(function() {
  updateUrl();
  updateStats();
})

$( "#lanternCellSelection" ).change(function() {
  updateUrl();
  updateStats();
})

$( "#helmetCellSelection" ).change(function() {
  updateUrl();
  updateStats();
})

$( "#chestplateCellSelection" ).change(function() {
  updateUrl();
  updateStats();
})

$( "#gauntletsCellSelection" ).change(function() {
  updateUrl();
  updateStats();
})

$( "#greavesCellSelection" ).change(function() {
  updateUrl();
  updateStats();
});
