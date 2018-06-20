var menuConfig = [
	{
		"menuText": "菜单一",
		/*"menuUrl": "https://www.baidu.com",*/
		"menuIcon": "./imgs/activity_fill.png",
		"childMenu": [
			{
				"menuText": "菜单一01",
				/*"menuUrl": "https://www.taobao.com",*/
				"menuIcon": "./imgs/activity_fill.png",
				"childMenu": [
					{
						"menuText": "菜单一0101",
						/*"menuUrl": "https://www.taobao.com",*/
						"menuIcon": "./imgs/activity_fill.png",
						"childMenu": [
							{
								"menuText": "首页配置子页",
								"menuUrl": "https://www.taobao.com",
								"menuIcon": "./imgs/activity_fill.png"
							}
						]
					}
				]
			},
			{
				"menuText": "菜单一02",
				/*"menuUrl": "https://www.taobao.com",*/
				"menuIcon": "./imgs/activity_fill.png",
				"childMenu": [
					{
						"menuText": "菜单一0201",
						/*"menuUrl": "https://www.taobao.com",*/
						"menuIcon": "./imgs/activity_fill.png",
						"childMenu": [
							{
								"menuText": "首页配置子页",
								"menuUrl": "https://www.taobao.com",
								"menuIcon": "./imgs/activity_fill.png"
							}
						]
					}
				]
			}
		]
	},{
		"menuText": "菜单二",
		/*"menuUrl": "https://www.jd.com",*/
		"menuIcon": "./imgs/activity_fill.png",
		"childMenu": [
			{
				"menuText": "权限管理子页",
				"menuUrl": "https://www.taobao.com",
				"menuIcon": "./imgs/activity_fill.png"
			}
		]
	}
];

function menuTree (menuConfig) {
	this.config = menuConfig;
	this.ele = document.getElementById('menuTree');
}

menuTree.prototype.createEle = function (menuObj) {
	var branch = document.createElement('div');
	var header = document.createElement('header');
	var a = document.createElement('a');
	var img = document.createElement('img');
	var span = document.createElement('span');

	branch.className = "branch";
	img.src = menuObj.menuIcon;
	span.innerText = menuObj.menuText;
	span.textContent = menuObj.menuText;
	menuObj.menuUrl ? a.href = menuObj.menuUrl : a.onclick = this.clickFun;

	a.appendChild(img);
	a.appendChild(span);
	header.appendChild(a);
	branch.appendChild(header);

	return branch;
}
menuTree.prototype.loopObj = function (parent, menuArr) {
	var branch;
	var children = [];
	for(var menu = 0;menu < menuArr.length;menu++) {
		branch = this.createEle(menuArr[menu]);
		parent.appendChild(branch);
		if(menuArr[menu].childMenu && menuArr[menu].childMenu.length) {
			children.push({childMenu: menuArr[menu].childMenu,parent: branch});
		}
	}
	if(children.length) {
		for(var childIndex = 0;childIndex < children.length;childIndex++) {
			this.loopObj(children[childIndex].parent, children[childIndex].childMenu);
		}
	}
}
menuTree.prototype.clickFun = function (event) {
	event.preventDefault();
	var nextBranchs = this.parentNode.parentNode.children;
	for(var i = 0;i < nextBranchs.length;i++) {
		if(nextBranchs[i].className === "branch") {
			if(nextBranchs[i].style.display === '' || nextBranchs[i].style.display === 'none' || nextBranchs[i].style.display === undefined) {
				 nextBranchs[i].style.display = "block"; 
			}else {
				/*折叠子集菜单*/
				nextBranchs[i].style.display = "none";
				/* 折叠所有后代菜单 */
				var childBranchs = nextBranchs[i].querySelectorAll('.branch');
				for(var j = 0;j < childBranchs.length;j++) {
					childBranchs[j].style.display = "none";
				}
				
			}
		}
		
	}
	
	
}

menuTree.prototype.init = function () {
	var config = this.config;
	var parent = this.ele;

	parent.innerHTML = "";
	this.loopObj(parent, config);
}

window.onload = function () {
	var menutree = new menuTree(menuConfig);
	menutree.init();
}