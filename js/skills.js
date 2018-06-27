//adding new skills

function addNewSkill() {
	var table = document.getElementById("skills-table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = addingSkillName.value;
    cell2.innerHTML = addingSkillDescription.value;
    cell3.innerHTML = addingSkillImage.value;

    //input field will be empty after each value entered
	document.getElementById('addingSkillName').value = "";
	document.getElementById('addingSkillDescription').value = "";
	document.getElementById('addingSkillImage').value = "";
}

//deleting old skills and replacing with new one

function deleteOldSkill() {
	document.getElementById('skills-table').deleteRow(3);
}