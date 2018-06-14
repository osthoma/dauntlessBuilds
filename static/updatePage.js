/* global Hashids ClipboardJS cellDescriptions */

const hashids = new Hashids('dauntlessBuilds');

const clipboard = new ClipboardJS('.btn-clipboard');

function hideAllWeapons() {
  $('#Hammers').css('display', 'none');
  $('#Axes').css('display', 'none');
  $('#Swords').css('display', 'none');
  $('#ChainBlades').css('display', 'none');
  $('#WarPikes').css('display', 'none');
}

function hideAllCells() {
  $('[data-category]').css('display', 'none');
}

function updateWeaponCells(type) {
  $('#weaponCellSelection01 option').css('display', 'none');
  $('#weaponCellSelection01 option').each(function displayMatchingCells() {
    if ($(`${type} option:selected`).data('cellslot01') === $(this).data('category')) {
      $(this).css('display', 'block');
    }
  });

  $('#weaponCellSelection02 option').css('display', 'none');
  $('#weaponCellSelection02 option').each(function displayMatchingCells() {
    if ($(`${type} option:selected`).data('cellslot02') === $(this).data('category')) {
      $(this).css('display', 'block');
    }
  });

  if ($(`${type} option:selected`).data('cellslot01') === 'None') {
    $('[data-category="Empty"]').css('display', 'block');
  }
  if ($(`${type} option:selected`).data('cellslot02') === 'None') {
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#weaponCellSelection01 option').each(function displayFirstVisible() {
    if ($(this).css('display') !== 'none') {
      $(this).prop('selected', true);
      return false;
    }
    return true;
  });

  $('#weaponCellSelection02 option').each(function displayFirstVisible() {
    if ($(this).css('display') !== 'none') {
      $(this).prop('selected', true);
      return false;
    }
    return true;
  });
}

function updateLanternCells() {
  $('#lanternCellSelection option').css('display', 'none');
  $('#lanternCellSelection option').each(function displayMatchingCells() {
    if ($('#lanternSelection option:selected').data('cellslot') === $(this).data('category')) {
      $(this).css('display', 'block');
    }
  });

  if ($('#lanternSelection option:selected').data('cellslot') === 'None') {
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#lanternCellSelection option').each(function displayFirstVisible() {
    if ($(this).css('display') !== 'none') {
      $(this).prop('selected', true);
      return false;
    }
    return true;
  });
}

function updateHelmetCells() {
  $('#helmetCellSelection option').css('display', 'none');
  $('#helmetCellSelection option').each(function displayMatchingCells() {
    if ($('#helmetSelection option:selected').data('cellslot') === $(this).data('category')) {
      $(this).css('display', 'block');
    }
  });

  if ($('#helmetSelection option:selected').data('cellslot') === 'None') {
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#helmetCellSelection option').each(function displayFirstVisible() {
    if ($(this).css('display') !== 'none') {
      $(this).prop('selected', true);
      return false;
    }
    return true;
  });
}

function updateChestplateCells() {
  $('#chestplateCellSelection option').css('display', 'none');
  $('#chestplateCellSelection option').each(function displayMatchingCells() {
    if ($('#chestplateSelection option:selected').data('cellslot') === $(this).data('category')) {
      $(this).css('display', 'block');
    }
  });

  if ($('#chestplateSelection option:selected').data('cellslot') === 'None') {
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#chestplateCellSelection option').each(function displayFirstVisible() {
    if ($(this).css('display') !== 'none') {
      $(this).prop('selected', true);
      return false;
    }
    return true;
  });
}

function updateGauntletsCells() {
  $('#gauntletsCellSelection option').css('display', 'none');
  $('#gauntletsCellSelection option').each(function displayMatchingCells() {
    if ($('#gauntletsSelection option:selected').data('cellslot') === $(this).data('category')) {
      $(this).css('display', 'block');
    }
  });

  if ($('#gauntletsSelection option:selected').data('cellslot') === 'None') {
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#gauntletsCellSelection option').each(function displayFirstVisible() {
    if ($(this).css('display') !== 'none') {
      $(this).prop('selected', true);
      return false;
    }
    return true;
  });
}

function updateGreavesCells() {
  $('#greavesCellSelection option').css('display', 'none');
  $('#greavesCellSelection option').each(function displayMatchingCells() {
    if ($('#greavesSelection option:selected').data('cellslot') === $(this).data('category')) {
      $(this).css('display', 'block');
    }
  });

  if ($('#greavesSelection option:selected').data('cellslot') === 'None') {
    $('[data-category="Empty"]').css('display', 'block');
  }

  $('#greavesCellSelection option').each(function displayFirstVisible() {
    if ($(this).css('display') !== 'none') {
      $(this).prop('selected', true);
      return false;
    }
    return true;
  });
}

function updateWeaponStats(type) {
  $(`${type} option:selected`).each(function showWeaponStats() {
    const weaponName = $(this).data('name');
    $('#weaponStats').append(`<p>${weaponName}</p>`);
    if ($(this).data('bonuses')) {
      let bonusString = $(this).data('bonuses');
      if (bonusString !== undefined && bonusString !== 'None') {
        bonusString = bonusString.replace(/'/g, '"');
        const bonuses = JSON.parse(bonusString);

        Object.keys(bonuses).forEach((key) => {
          $('#weaponStats').append(`<p>${key} +${bonuses[key]}</p>`);
        });
      }
    }
    if ($(this).data('specials')) {
      let specialsString = $(this).data('specials');
      if (specialsString === undefined || specialsString === 'None') {
        return false;
      }
      specialsString = specialsString.replace(/'/g, '"');
      const specials = JSON.parse(specialsString);
      Object.keys(specials).forEach((key) => {
        $('#weaponStats').append(`<p>${specials[key]}</p>`);
      });
    }
    return true;
  });
}

function updateTotalBonuses() {
  const stats = [];
  const uniqueEffects = [];

  if ($('#typeSelection option:selected').val() === '1') {
    $('#Hammers option:selected').each(function addBonusesAndSpecials() {
      if ($(this).data('bonuses')) {
        let bonusString = $(this).data('bonuses');
        if (bonusString !== undefined && bonusString !== 'None') {
          bonusString = bonusString.replace(/'/g, '"');
          const bonuses = JSON.parse(bonusString);

          Object.keys(bonuses).forEach((key) => {
            if (key in stats) {
              stats[key] += bonuses[key];
            } else {
              stats[key] = bonuses[key];
            }
          });
        }
      }
      if ($(this).data('specials')) {
        let specialsString = $(this).data('specials');
        if (specialsString === undefined || specialsString === 'None') {
          return false;
        }
        specialsString = specialsString.replace(/'/g, '"');
        const specials = JSON.parse(specialsString);

        Object.keys(specials).forEach((key) => {
          uniqueEffects.push(specials[key]);
        });
      }
      return true;
    });
  }
  if ($('#typeSelection option:selected').val() === '2') {
    $('#Axes option:selected').each(function addBonusesAndSpecials() {
      if ($(this).data('bonuses')) {
        let bonusString = $(this).data('bonuses');
        if (bonusString !== undefined && bonusString !== 'None') {
          bonusString = bonusString.replace(/'/g, '"');
          const bonuses = JSON.parse(bonusString);

          Object.keys(bonuses).forEach((key) => {
            if (key in stats) {
              stats[key] += bonuses[key];
            } else {
              stats[key] = bonuses[key];
            }
          });
        }
        if ($(this).data('specials')) {
          let specialsString = $(this).data('specials');
          if (specialsString === undefined || specialsString === 'None') {
            return false;
          }
          specialsString = specialsString.replace(/'/g, '"');
          const specials = JSON.parse(specialsString);

          Object.keys(specials).forEach((key) => {
            uniqueEffects.push(specials[key]);
          });
        }
      }
      return true;
    });
  }
  if ($('#typeSelection option:selected').val() === '3') {
    $('#Swords option:selected').each(function addBonusesAndSpecials() {
      if ($(this).data('bonuses')) {
        let bonusString = $(this).data('bonuses');
        if (bonusString !== undefined && bonusString !== 'None') {
          bonusString = bonusString.replace(/'/g, '"');
          const bonuses = JSON.parse(bonusString);

          Object.keys(bonuses).forEach((key) => {
            if (key in stats) {
              stats[key] += bonuses[key];
            } else {
              stats[key] = bonuses[key];
            }
          });
        }
        if ($(this).data('specials')) {
          let specialsString = $(this).data('specials');
          if (specialsString === undefined || specialsString === 'None') {
            return false;
          }
          specialsString = specialsString.replace(/'/g, '"');
          const specials = JSON.parse(specialsString);
          Object.keys(specials).forEach((key) => {
            uniqueEffects.push(specials[key]);
          });
        }
      }
      return true;
    });
  }

  if ($('#typeSelection option:selected').val() === '4') {
    $('#ChainBlades option:selected').each(function addBonusesAndSpecials() {
      if ($(this).data('bonuses')) {
        let bonusString = $(this).data('bonuses');
        if (bonusString !== undefined && bonusString !== 'None') {
          bonusString = bonusString.replace(/'/g, '"');
          const bonuses = JSON.parse(bonusString);

          Object.keys(bonuses).forEach((key) => {
            if (key in stats) {
              stats[key] += bonuses[key];
            } else {
              stats[key] = bonuses[key];
            }
          });
        }
        if ($(this).data('specials')) {
          let specialsString = $(this).data('specials');
          if (specialsString === undefined || specialsString === 'None') {
            return false;
          }
          specialsString = specialsString.replace(/'/g, '"');
          const specials = JSON.parse(specialsString);
          Object.keys(specials).forEach((key) => {
            uniqueEffects.push(specials[key]);
          });
        }
      }
      return true;
    });
  }
  if ($('#typeSelection option:selected').val() === '5') {
    $('#WarPikes option:selected').each(function addBonusesAndSpecials() {
      if ($(this).data('bonuses')) {
        let bonusString = $(this).data('bonuses');
        if (bonusString !== undefined && bonusString !== 'None') {
          bonusString = bonusString.replace(/'/g, '"');
          const bonuses = JSON.parse(bonusString);

          Object.keys(bonuses).forEach((key) => {
            if (key in stats) {
              stats[key] += bonuses[key];
            } else {
              stats[key] = bonuses[key];
            }
          });
        }
        if ($(this).data('specials')) {
          let specialsString = $(this).data('specials');
          if (specialsString === undefined || specialsString === 'None') {
            return false;
          }
          specialsString = specialsString.replace(/'/g, '"');
          const specials = JSON.parse(specialsString);
          Object.keys(specials).forEach((key) => {
            uniqueEffects.push(specials[key]);
          });
        }
      }
      return true;
    });
  }
  $('#lanternSelection option:selected').each(function addBonusesAndSpecials() {
    if ($(this).data('bonuses')) {
      let bonusString = $(this).data('bonuses');
      if (bonusString !== undefined && bonusString !== 'None') {
        bonusString = bonusString.replace(/'/g, '"');
        const bonuses = JSON.parse(bonusString);

        Object.keys(bonuses).forEach((key) => {
          if (key in stats) {
            stats[key] += bonuses[key];
          } else {
            stats[key] = bonuses[key];
          }
        });
      }
    }
    return true;
  });

  $('#helmetSelection option:selected').each(function addBonusesAndSpecials() {
    if ($(this).data('bonuses')) {
      let bonusString = $(this).data('bonuses');
      if (bonusString !== undefined && bonusString !== 'None') {
        bonusString = bonusString.replace(/'/g, '"');
        const bonuses = JSON.parse(bonusString);

        Object.keys(bonuses).forEach((key) => {
          if (key in stats) {
            stats[key] += bonuses[key];
          } else {
            stats[key] = bonuses[key];
          }
        });
      }
      if ($(this).data('specials')) {
        let specialsString = $(this).data('specials');
        if (specialsString === undefined || specialsString === 'None') {
          return false;
        }
        specialsString = specialsString.replace(/'/g, '"');
        const specials = JSON.parse(specialsString);
        Object.keys(specials).forEach((key) => {
          uniqueEffects.push(specials[key]);
        });
      }
    }
    return true;
  });

  $('#chestplateSelection option:selected').each(function addBonusesAndSpecials() {
    if ($(this).data('bonuses')) {
      let bonusString = $(this).data('bonuses');
      if (bonusString !== undefined && bonusString !== 'None') {
        bonusString = bonusString.replace(/'/g, '"');
        const bonuses = JSON.parse(bonusString);

        Object.keys(bonuses).forEach((key) => {
          if (key in stats) {
            stats[key] += bonuses[key];
          } else {
            stats[key] = bonuses[key];
          }
        });
      }
      if ($(this).data('specials')) {
        let specialsString = $(this).data('specials');
        if (specialsString === undefined || specialsString === 'None') {
          return false;
        }
        specialsString = specialsString.replace(/'/g, '"');
        const specials = JSON.parse(specialsString);
        Object.keys(specials).forEach((key) => {
          uniqueEffects.push(specials[key]);
        });
      }
    }
    return true;
  });

  $('#gauntletsSelection option:selected').each(function addBonusesAndSpecials() {
    if ($(this).data('bonuses')) {
      let bonusString = $(this).data('bonuses');
      if (bonusString !== undefined && bonusString !== 'None') {
        bonusString = bonusString.replace(/'/g, '"');
        const bonuses = JSON.parse(bonusString);

        Object.keys(bonuses).forEach((key) => {
          if (key in stats) {
            stats[key] += bonuses[key];
          } else {
            stats[key] = bonuses[key];
          }
        });
      }
      if ($(this).data('specials')) {
        let specialsString = $(this).data('specials');
        if (specialsString === undefined || specialsString === 'None') {
          return false;
        }
        specialsString = specialsString.replace(/'/g, '"');
        const specials = JSON.parse(specialsString);
        Object.keys(specials).forEach((key) => {
          uniqueEffects.push(specials[key]);
        });
      }
    }
    return true;
  });

  $('#greavesSelection option:selected').each(function addBonusesAndSpecials() {
    if ($(this).data('bonuses')) {
      let bonusString = $(this).data('bonuses');
      if (bonusString !== undefined && bonusString !== 'None') {
        bonusString = bonusString.replace(/'/g, '"');
        const bonuses = JSON.parse(bonusString);

        Object.keys(bonuses).forEach((key) => {
          if (key in stats) {
            stats[key] += bonuses[key];
          } else {
            stats[key] = bonuses[key];
          }
        });
      }
      if ($(this).data('specials')) {
        let specialsString = $(this).data('specials');
        if (specialsString === undefined || specialsString === 'None') {
          return false;
        }
        specialsString = specialsString.replace(/'/g, '"');
        const specials = JSON.parse(specialsString);
        Object.keys(specials).forEach((key) => {
          uniqueEffects.push(specials[key]);
        });
      }
    }
    return true;
  });

  $('#weaponCellSelection01 option:selected').each(function addCellBonuses() {
    if ($(this).data('bonuses')) {
      let bonusString = $(this).data('bonuses');
      if (bonusString !== undefined && bonusString !== 'None') {
        bonusString = bonusString.replace(/'/g, '"');
        const bonuses = JSON.parse(bonusString);

        Object.keys(bonuses).forEach((key) => {
          if (key in stats) {
            stats[key] += bonuses[key];
          } else {
            stats[key] = bonuses[key];
          }
        });
      }
    }
    return true;
  });

  $('#weaponCellSelection02 option:selected').each(function addCellBonuses() {
    if ($(this).data('bonuses')) {
      let bonusString = $(this).data('bonuses');
      if (bonusString !== undefined && bonusString !== 'None') {
        bonusString = bonusString.replace(/'/g, '"');
        const bonuses = JSON.parse(bonusString);

        Object.keys(bonuses).forEach((key) => {
          if (key in stats) {
            stats[key] += bonuses[key];
          } else {
            stats[key] = bonuses[key];
          }
        });
      }
    }
    return true;
  });

  $('#lanternCellSelection option:selected').each(function addCellBonuses() {
    if ($(this).data('bonuses')) {
      let bonusString = $(this).data('bonuses');
      if (bonusString !== undefined && bonusString !== 'None') {
        bonusString = bonusString.replace(/'/g, '"');
        const bonuses = JSON.parse(bonusString);
        Object.keys(bonuses).forEach((key) => {
          if (key in stats) {
            stats[key] += bonuses[key];
          } else {
            stats[key] = bonuses[key];
          }
        });
      }
    }
    return true;
  });

  $('#helmetCellSelection option:selected').each(function addCellBonuses() {
    if ($(this).data('bonuses')) {
      let bonusString = $(this).data('bonuses');
      if (bonusString !== undefined && bonusString !== 'None') {
        bonusString = bonusString.replace(/'/g, '"');
        const bonuses = JSON.parse(bonusString);
        Object.keys(bonuses).forEach((key) => {
          if (key in stats) {
            stats[key] += bonuses[key];
          } else {
            stats[key] = bonuses[key];
          }
        });
      }
    }
    return true;
  });

  $('#chestplateCellSelection option:selected').each(function addCellBonuses() {
    if ($(this).data('bonuses')) {
      let bonusString = $(this).data('bonuses');
      if (bonusString !== undefined && bonusString !== 'None') {
        bonusString = bonusString.replace(/'/g, '"');
        const bonuses = JSON.parse(bonusString);

        Object.keys(bonuses).forEach((key) => {
          if (key in stats) {
            stats[key] += bonuses[key];
          } else {
            stats[key] = bonuses[key];
          }
        });
      }
    }
    return true;
  });

  $('#gauntletsCellSelection option:selected').each(function addCellBonuses() {
    if ($(this).data('bonuses')) {
      let bonusString = $(this).data('bonuses');
      if (bonusString !== undefined && bonusString !== 'None') {
        bonusString = bonusString.replace(/'/g, '"');
        const bonuses = JSON.parse(bonusString);
        Object.keys(bonuses).forEach((key) => {
          if (key in stats) {
            stats[key] += bonuses[key];
          } else {
            stats[key] = bonuses[key];
          }
        });
      }
    }
    return true;
  });

  $('#greavesCellSelection option:selected').each(function addCellBonuses() {
    if ($(this).data('bonuses')) {
      let bonusString = $(this).data('bonuses');
      if (bonusString !== undefined && bonusString !== 'None') {
        bonusString = bonusString.replace(/'/g, '"');
        const bonuses = JSON.parse(bonusString);
        Object.keys(bonuses).forEach((key) => {
          if (key in stats) {
            stats[key] += bonuses[key];
          } else {
            stats[key] = bonuses[key];
          }
        });
      }
    }
    return true;
  });

  $('#stats').empty();
  if (Object.keys(stats).length > 0) {
    const numberOfBonuses = Object.keys(stats).length;
    const bonusValues = Object.values(stats);
    const maxBonus = Math.max(...bonusValues);

    for (let i = 0; i < numberOfBonuses; i += 1) {
    }

    for (const [key, value] of Object.entries(stats)) {
      let tooltip = '';
      for (const cellDescription in cellDescriptions) {
        const object = cellDescriptions[cellDescription];
        if (object.name === key) {
          for (let i = 0; i < 6; i += 1) {
            const key = Object.keys(object)[i + 1];
            if (i < value) {
              tooltip += `<p><b>${object[key]}</b></p>`;
            } else {
              tooltip += `<p class='text-secondary'>${object[key]}</p>`;
            }
          }
        }
      }
      $('#stats').append(`<button type="button" class="btn btn-primary btn-sm btn-block" data-toggle="tooltip" data-placement="bottom" data-html="true" title="${tooltip}">${key} +${value}</button>`);
    }
  } else {
    $('#stats').append('<ul><p class="card-subtitle text-muted">No bonuses from items or infusions.</p></ul>');
  }

  $('#lanternEffects').empty();

  const lanternEffectInstant = `Instant: ${$('#lanternSelection option:selected').data('instant')}`;
  const lanternEffectHold = `Hold: ${$('#lanternSelection option:selected').data('hold')}`;

  $('#lanternEffects').append(`<li>${lanternEffectInstant}</li>`);
  $('#lanternEffects').append(`<li>${lanternEffectHold}</li>`);

  $('#uniqueEffects').empty();
  if (uniqueEffects.length > 0) {
    for (let i = 0; i < uniqueEffects.length; i += 1) {
      $('#uniqueEffects').append(`<li>${uniqueEffects[i]}</li>`);
    }
  } else {
    $('#uniqueEffects').append('<p class="card-subtitle text-muted">No unique effects from items.</p>');
  }

  $('#weaponStats').empty();

  if ($('#typeSelection option:selected').val() === '1') {
    updateWeaponStats('#Hammers');
  }
  if ($('#typeSelection option:selected').val() === '2') {
    updateWeaponStats('#Axes');
  }
  if ($('#typeSelection option:selected').val() === '3') {
    updateWeaponStats('#Swords');
  }
  if ($('#typeSelection option:selected').val() === '4') {
    updateWeaponStats('#ChainBlades');
  }
  if ($('#typeSelection option:selected').val() === '5') {
    updateWeaponStats('#WarPikes');
  }

  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });
}


function showSelectedWeapons(type) {
  hideAllWeapons();
  $(type).css('display', 'block');
}

function updateUrl() {
  const selectedWeaponType = $('#typeSelection option:selected').val();

  let selectedWeapon = 0;

  let selectedWeaponCell01 = 0;
  let selectedWeaponCell01level = 0;

  let selectedWeaponCell02 = 0;
  let selectedWeaponCell02level = 0;

  if ($('#typeSelection option:selected').val() === '1') {
    selectedWeapon = $('#Hammers option:selected').val();

    selectedWeaponCell01 = $('#weaponCellSelection01 option:selected').val();
    selectedWeaponCell01level = $('#weaponCellSelection01 option:selected').data('amount');

    selectedWeaponCell02 = $('#weaponCellSelection02 option:selected').val();
    selectedWeaponCell02level = $('#weaponCellSelection02 option:selected').data('amount');
  } else if ($('#typeSelection option:selected').val() === '2') {
    selectedWeapon = $('#Axes option:selected').val();

    selectedWeaponCell01 = $('#weaponCellSelection01 option:selected').val();
    selectedWeaponCell01level = $('#weaponCellSelection01 option:selected').data('amount');

    selectedWeaponCell02 = $('#weaponCellSelection02 option:selected').val();
    selectedWeaponCell02level = $('#weaponCellSelection02 option:selected').data('amount');
  } else if ($('#typeSelection option:selected').val() === '3') {
    selectedWeapon = $('#Swords option:selected').val();

    selectedWeaponCell01 = $('#weaponCellSelection01 option:selected').val();
    selectedWeaponCell01level = $('#weaponCellSelection01 option:selected').data('amount');

    selectedWeaponCell02 = $('#weaponCellSelection02 option:selected').val();
    selectedWeaponCell02level = $('#weaponCellSelection02 option:selected').data('amount');
  } else if ($('#typeSelection option:selected').val() === '4') {
    selectedWeapon = $('#ChainBlades option:selected').val();

    selectedWeaponCell01 = $('#weaponCellSelection01 option:selected').val();
    selectedWeaponCell01level = $('#weaponCellSelection01 option:selected').data('amount');

    selectedWeaponCell02 = $('#weaponCellSelection02 option:selected').val();
    selectedWeaponCell02level = $('#weaponCellSelection02 option:selected').data('amount');
  } else {
    selectedWeapon = $('#WarPikes option:selected').val();

    selectedWeaponCell01 = $('#weaponCellSelection01 option:selected').val();
    selectedWeaponCell01level = $('#weaponCellSelection01 option:selected').data('amount');

    selectedWeaponCell02 = $('#weaponCellSelection02 option:selected').val();
    selectedWeaponCell02level = $('#weaponCellSelection02 option:selected').data('amount');
  }

  const selectedLantern = $('#lanternSelection option:selected').val();

  let selectedLanternCell = 0;
  let selectedLanternCellLevel = 0;

  selectedLanternCell = $('#lanternCellSelection option:selected').val();
  selectedLanternCellLevel = $('#lanternCellSelection option:selected').data('amount');


  const selectedHelmet = $('#helmetSelection option:selected').val();

  let selectedHelmetCell = 0;
  let selectedHelmetCellLevel = 0;

  selectedHelmetCell = $('#helmetCellSelection option:selected').val();
  selectedHelmetCellLevel = $('#helmetCellSelection option:selected').data('amount');

  const selectedChestplate = $('#chestplateSelection option:selected').val();

  let selectedChestplateCell = 0;
  let selectedChestplateCellLevel = 0;

  selectedChestplateCell = $('#chestplateCellSelection option:selected').val();
  selectedChestplateCellLevel = $('#chestplateCellSelection option:selected').data('amount');


  const selectedGauntlets = $('#gauntletsSelection option:selected').val();

  let selectedGauntletsCell = 0;
  let selectedGauntletsCellLevel = 0;

  selectedGauntletsCell = $('#gauntletsCellSelection option:selected').val();
  selectedGauntletsCellLevel = $('#gauntletsCellSelection option:selected').data('amount');

  const selectedGreaves = $('#greavesSelection option:selected').val();

  let selectedGreavesCell = 0;
  let selectedGreavesCellLevel = 0;

  selectedGreavesCell = $('#greavesCellSelection option:selected').val();
  selectedGreavesCellLevel = $('#greavesCellSelection option:selected').data('amount');

  const hash = hashids.encode(
    selectedWeaponType, selectedWeapon, selectedWeaponCell01, selectedWeaponCell01level,
    selectedWeaponCell02, selectedWeaponCell02level, selectedLantern, selectedLanternCell,
    selectedLanternCellLevel, selectedHelmet, selectedHelmetCell, selectedHelmetCellLevel,
    selectedChestplate, selectedChestplateCell, selectedChestplateCellLevel, selectedGauntlets,
    selectedGauntletsCell, selectedGauntletsCellLevel, selectedGreaves, selectedGreavesCell,
    selectedGreavesCellLevel,
  );

  $('#permaLink').val(`http://dauntlessbuilds.com/b/${hash}`);
}

$('#typeSelection').change(() => {
  if ($('#typeSelection option:selected').val() === '1') {
    updateWeaponCells('#Hammers');
    showSelectedWeapons('#Hammers');
  } else if ($('#typeSelection option:selected').val() === '2') {
    updateWeaponCells('#Axes');
    showSelectedWeapons('#Axes');
  } else if ($('#typeSelection option:selected').val() === '3') {
    updateWeaponCells('#Swords');
    showSelectedWeapons('#Swords');
  } else if ($('#typeSelection option:selected').val() === '4') {
    updateWeaponCells('#ChainBlades');
    showSelectedWeapons('#ChainBlades');
  } else {
    updateWeaponCells('#WarPikes');
    showSelectedWeapons('#WarPikes');
  }
  updateUrl();
  updateTotalBonuses();
});

$('#Hammers').change(() => {
  updateWeaponCells('#Hammers');
  updateUrl();
  updateTotalBonuses();
});

$('#Axes').change(() => {
  updateWeaponCells('#Axes');
  updateUrl();
  updateTotalBonuses();
});

$('#Swords').change(() => {
  updateWeaponCells('#Swords');
  updateUrl();
  updateTotalBonuses();
});

$('#ChainBlades').change(() => {
  updateWeaponCells('#ChainBlades');
  updateUrl();
  updateTotalBonuses();
});

$('#WarPikes').change(() => {
  updateWeaponCells('#WarPikes');
  updateUrl();
  updateTotalBonuses();
});


$('#lanternSelection').change(() => {
  updateLanternCells();
  updateUrl();
  updateTotalBonuses();
});


$('#helmetSelection').change(() => {
  updateHelmetCells();
  updateUrl();
  updateTotalBonuses();
});

$('#chestplateSelection').change(() => {
  updateChestplateCells();
  updateUrl();
  updateTotalBonuses();
});

$('#gauntletsSelection').change(() => {
  updateGauntletsCells();
  updateUrl();
  updateTotalBonuses();
});

$('#greavesSelection').change(() => {
  updateGreavesCells();
  updateUrl();
  updateTotalBonuses();
});


$('#weaponCellSelection01').change(() => {
  updateUrl();
  updateTotalBonuses();
});

$('#weaponCellSelection02').change(() => {
  updateUrl();
  updateTotalBonuses();
});

$('#lanternCellSelection').change(() => {
  updateUrl();
  updateTotalBonuses();
});

$('#helmetCellSelection').change(() => {
  updateUrl();
  updateTotalBonuses();
});

$('#chestplateCellSelection').change(() => {
  updateUrl();
  updateTotalBonuses();
});

$('#gauntletsCellSelection').change(() => {
  updateUrl();
  updateTotalBonuses();
});

$('#greavesCellSelection').change(() => {
  updateUrl();
  updateTotalBonuses();
});

$(document).ready(() => {
  $('#wrongCodeWarning').css('display', 'none');

  hideAllCells();

  /* global decodeUrl:true/false buildString:hash */

  if (decodeUrl === true) {
    const selectedItems = hashids.decode(buildString);

    if (selectedItems.length > 0) {
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

      if (selectedItems[0] === 1) {
        showSelectedWeapons('#Hammers');
        $('#Hammers').val(selectedItems[1]);
        updateWeaponCells('#Hammers');
      } else if (selectedItems[0] === 2) {
        showSelectedWeapons('#Axes');
        $('#Axes').val(selectedItems[1]);
        updateWeaponCells('#Axes');
      } else if (selectedItems[0] === 3) {
        showSelectedWeapons('#Swords');
        $('#Swords').val(selectedItems[1]);
        updateWeaponCells('#Swords');
      } else if (selectedItems[0] === 4) {
        showSelectedWeapons('#ChainBlades');
        $('#ChainBlades').val(selectedItems[1]);
        updateWeaponCells('#ChainBlades');
      } else {
        showSelectedWeapons('#WarPikes');
        $('#WarPikes').val(selectedItems[1]);
        updateWeaponCells('#WarPikes');
      }

      $('#lanternSelection').val(selectedItems[6]);

      $('#helmetSelection').val(selectedItems[9]);
      $('#chestplateSelection').val(selectedItems[12]);
      $('#gauntletsSelection').val(selectedItems[15]);
      $('#greavesSelection').val(selectedItems[18]);


      updateLanternCells();

      updateHelmetCells();
      updateChestplateCells();
      updateGauntletsCells();
      updateGreavesCells();


      $('#weaponCellSelection01 option').each(function selectCellById() {
        if (parseInt($(this).val(), 10) === selectedItems[2] && $(this).data('amount') === selectedItems[3]) {
          $(this).prop('selected', true);
          return false;
        }
        return true;
      });

      $('#weaponCellSelection02 option').each(function selectCellById() {
        if (parseInt($(this).val(), 10) === selectedItems[4] && $(this).data('amount') === selectedItems[5]) {
          $(this).prop('selected', true);
          return false;
        }
        return true;
      });


      $('#lanternCellSelection option').each(function selectCellById() {
        if (parseInt($(this).val(), 10) === selectedItems[7] && $(this).data('amount') === selectedItems[8]) {
          $(this).prop('selected', true);
          return false;
        }
        return true;
      });


      $('#helmetCellSelection option').each(function selectCellById() {
        if (parseInt($(this).val(), 10) === selectedItems[10] && $(this).data('amount') === selectedItems[11]) {
          $(this).prop('selected', true);
          return false;
        }
        return true;
      });

      $('#chestplateCellSelection option').each(function selectCellById() {
        if (parseInt($(this).val(), 10) === selectedItems[13] && $(this).data('amount') === selectedItems[14]) {
          $(this).prop('selected', true);
          return false;
        }
        return true;
      });

      $('#gauntletsCellSelection option').each(function selectCellById() {
        if (parseInt($(this).val(), 10) === selectedItems[16] && $(this).data('amount') === selectedItems[17]) {
          $(this).prop('selected', true);
          return false;
        }
        return true;
      });

      $('#greavesCellSelection option').each(function selectCellById() {
        if (parseInt($(this).val(), 10) === selectedItems[19] && $(this).data('amount') === selectedItems[20]) {
          $(this).prop('selected', true);
          return false;
        }
        return true;
      });
    } else {
      $('#wrongCodeWarning').css('display', 'block');
      showSelectedWeapons('#Hammers');
    }
  } else {
    showSelectedWeapons('#Hammers');
  }
  updateUrl();
  updateTotalBonuses();
});
