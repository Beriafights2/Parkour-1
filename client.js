Damage.GetContext().FriendlyFire.Value = true;

// ��������� ��������� �������� �������
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value =  GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value =  GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value =  GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value =  GameMode.Parameters.GetBool("Fly");
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Kills",
  DisplayName: "Убийства",
  ShortDisplayName: "Убийства"
 },
 {
  Value: "Deaths",
  DisplayName: "Смерти",
  ShortDisplayName: "Смерти"
 },
{
  Value: "Status",
  DisplayName: "Статус",
  ShortDisplayName: "Статус"
 },
 {
  Value: "Scores",
  DisplayName: "Очки",
  ShortDisplayName: "Очки"
 }
];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "Statistics\Deaths",
 ShortDisplayName: "Statistics\Deaths"
};




// ������ ��������� ������ ��� �����
BreackGraph.BreackAll = true;
// ���������� ���������� ������
Ui.GetContext().QuadsCount.Value = true;
// ��� ������������ �����
Build.GetContext().Pipette.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;

// ��������� ����
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// ������� �������
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
 Teams.Add("Red", "<color=red>АДМИНЫ</a>", { r
: 80 });
 Teams.Get("Red").Spawns.SpawnPointsGroups.Add
(1);
}

// ������ ���������  
Ui.GetContext().Hint.Value = "прив"; 
  
des = "@Vanhek34";  
sed = "@Vanhek34";  
Teams.Get("Blue").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp1.Value = { Team: "Red", Prop: "sed" };  
Teams.Get("Red").Properties.Get("sed").Value = sed; 
 
Ui.GetContext().TeamProp2.Value = { Team: "Blue", Prop: "Des" };
var maxDeaths = Players.MaxCount * 6;
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths;
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths;
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Status",
  DisplayName: "<color=orange>Status</a>",
  ShortDisplayName: "<color=orange>Status</a>"
 },
 {
  Value: "Scores",
  DisplayName: "<color=pink>money</a>",
  ShortDisplayName: "<color=pink>money</a>"
 },
 {
  Value: "Spawns",
  DisplayName: "Donat money",
  ShortDisplayName: "Donat money"
 },
 {

  Value: "Kills",
  DisplayName: "color=yellow>пропуск</a>",
  ShortDisplayName: "<color=yellow>пропуск</a>", }



];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "<color=gooboy>death</a>",
 ShortDisplayName: "<color=gooboy>death</a>"
};





if (blue || !red && !blue) {
 Teams.Add("Blue", "<color=orange>ИГРОКИ</a>", { g: 128 });
 Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
 if(GameMode.Parameters.GetBool("BlueHasNothing")){
  var inventory = Inventory.GetContext();
  Teams.Get("Blue").Inventory.Main.Value = false;
  Teams.Get("Blue").Inventory.Secondary.Value = false;
  Teams.Get("Blue").Inventory.Melee.Value = false;
  Teams.Get("Blue").Inventory.Explosive.Value = false;
  Teams.Get("Blue").Inventory.Build.Value = false;
 }
}

lolTrigger.Tags = [LOLAreasTag];  
lolTrigger.Enable = true;  
lolTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ВСЕ БЛОКИ=)";player.Properties.Immortality.Value = false;  
Spawns.GetContext().enable = true;  
lolTrigger.Enable = true;  
Player.inventory.Build.Value = true;  
Player.inventory.BuildInfinity.Value = true;  
Player.inventory.Build.BlocksSet.Value = true;  
lolTrigger.Enable = true;  
}); 
});  
 }  
});  
// ????? ?? ????? ? ???????  
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});  
 
 
//   
var des = "<color=red>РЕЖИМ ОТ ivan12@3</a>";   
Teams.Get("Red").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp2.Value = { Team: "Blue", Prop: "Des" };   
Teams.Get("Blue").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp1.Value = { Team: "Red", Prop: "Des" };


// entrance1 
Teams.OnRequestJoinTeam.Add(function(player,team){if(player.id ==
"2827CD16AE7CC982" || player.id == "2827CD16AE7CC982"){
player.Properties.Get("VipAdmin").Value = "<size=30><color=#ff0000>Б</color><color=#ff0007>О</color><color=#ff1724>С</color><color=#ff2714>С</color></size>";
player.inventory.Explosive.Value = true; 
player.inventory.ExplosiveInfinity.Value = true; 
player.inventory.Main.Value = true; 
player.inventory.MainInfinity.Value = true; 
player.inventory.Secondary.Value = true 
player.inventory.SecondaryInfinity.Value = true; 
player.inventory.Melee.Value = true; 
player.inventory.Build.Value = true; 
player.inventory.BuildInfinity.Value = true; 
player.Build.BuildModeEnable.Value = true; 
player.Build.Pipette.Value = true; 
player.Build.BuildRangeEnable.Value = true; 
player.Build.FlyEnable.Value = true; 
player.Build.FillQuad.Value = true; 
player.Damage.DamageIn.Value = false;
Build.GetContext().FloodFill.Value = false; 
player.Properties.Get("coins").Value = Infinity; 
player.contextedProperties.SkinType.Value = 1
  } 
 } 
);


var rsTrigger = AreaPlayerTriggerService.Get("rsTrigger"); rsTrigger.Tags = ["rsTrigger"]; 
rsTrigger.Enable = true; 
rsTrigger.OnEnter.Add(function (player) 
{ Game.RestartGame(); });


var НОЖ =                         AreaPlayerTriggerService.Get("НОЖ"); НОЖ.Tags =["НОЖ"];                   НОЖ.Enable = true;                    НОЖ.OnEnter.Add(function(player,area){


if(player.Properties.Scores.Value >=1000){
player.Ui.Hint.Value ="КУПЛЕН НОЖ";
player.Properties.Scores.Value -= 1000;
player.lnventory.Melee.Value = true;
}else{
player.Ui.Hint.Value ="1000 СТОИТ НОЖ,А У ТЕБЯ:"+
player.Properties.Scores.Value;
}
});


var ПЕСТОЛЕТ =                        AreaPlayerTriggerService.Get("ПЕСТОЛЕТ");                                ПЕСТОЛЕТ.Iags =["ПЕСТОЛЕТ"];          ПЕСТОЛЕТ.Enable = true;              ПЕСТОЛЕТ.OnEnter.Add(function(player,area){


if(player.Properties.Scores.Value >=12000){
player.Ui.Hint.Value ="КУПЛЕН ПЕСТОЛЕТ";
player.Properties.Scores.Value -= 12000;
player.lnventory.Secondary.Value = true;
}else{
player.Ui.Hint.Value ="12000 СТОИТ ПЕСТОЛЕТ,А У ТЕБЯ:"+
player.Properties.Scores.Value;
}
});


ver ОСНОВА =                        AreaPlayerTriggerService.Get("ОСНОВНОЕ ОРУЖИЕ");                                 ОСНОВА.Tags =["ОСНОВА"];             ОСНОВА.Enable = true;                 ОСНОВА.OnEnter.Add(function(player,area){


if(player.Properties.Scores.Value >=25000){
player.Ui.Hint.Value ="КУПЛЕН ОСНОВНОЕ ОРУЖИЕ";
player.Properties.Scores.Value =true;
}else{
player.Ui.Hint.Value ="25000 СТОИТ ОСНОВНОЕ ОРУЖИЕ,А У ТЕБЯ:"+
player.Properties.Scores.Value;
}
});


ver ГРАНАТЫ =                        AreaPlayerTriggerService.Get("ГРАНАТЫ");                                ГРАНАТЫ.Tags =["ГРАНАТЫ"];            ГРАНАТЫ.Enable = true;                 ГРАНАТЫ.OnEnter.Add(function(play,area){ 


if(player.Properties.Scores.Value >= 53000){
player.Ui.Hint.Value ="КУПЛЕНЫ ГРАНАТЫ"
player.lnventory.Explosive.Value =true;
player.Ui.Hint.Value ="53000 СТОИТ ГРАНАТЫ,А У ТЕБЯ:"+
player.Properties.Scores.Value;
}
});


ver ПОЛЁТ =                           AreaPlayerTriggerService.Get("ПОЛЁТ");                                   ПОЛЁТ.Tags =["ПОЛЁТ"];                 ПОЛЁТ.Enable = true;                  ПОЛЁТ.OnEnter.Add(function(player,area){


if(player.Properties.Get(LeaderBoardProp).Value >=1000000){
player.Ui.Hint.Value ="КУПЛЕН ПОЛЁТ";
player.Properties.Get(LeaderBoardProp).Value -=1000000;
player.Build.FlyEnable.Value = true;
}alse{
player.Ui.Hint.Value ="1000000 СТОИТ ПОЛЁТ,А У ТЕБЯ"+
player.Properties.Get(LeaaderBoardProp).Value;
}
});


var 100 = AreaPlayerTriggerService.Get("100"); 
100.Tags = ["100"]; 
100.Enable = true; 
100.OnEnter.Add(function (player, area) {

player.Properties.Get(LeaderBoardProp).Value += 100;


player.Ui.Hint.Value ="ТЫ ПОЛУЧАЕШЬ 100 МОНЕТ";
});


var БАН =
AreaPlayerTriggerService.Get("БАН");
БАН.Tags =["БАН"];
БАН.Enable = true;
БАН.OnEnter.Add(function(player.area){
var j = Players.GetEnumerator();
var prop = player.Properties;
if(prop.Get("admin").Value = 
"ВЫ НЕ АДМИНИСТРАТОР";
}
else{
 var m =[];
 while(j.moveNext()){
  m.push(j.Current.id);
 }
 var sPlayer = 
Players.Get(m[props.Get("index").Value]);
   sPlayer.Spawns.Enable = false;
   sPlayer.Spawns.Despawn();
   player.Ui.Hint.Value ="ИГРОК"+
  sPlayer.nickName +"ЗАБАНЕН";
   PlayersBanLust.push(sPlayer.id);
}
});


var РАЗБАН =
AreaPlayerTriggerService.Get("РАЗБАН");
РАЗБАН.Tags =["РАЗБАН"];
РАЗБАН.Enable = true;
РАЗБАН.OnEnter.Add(function(player){
var j =Players.GetEnumerator();
var prop = player.Properties;
if(prop.Get("admin").Value!=2){
  player.Ui.Hint.Value =
"ВЫ НЕ АДМИНИСТРАТОР";
}
 else{
   var m =[];
   while(j.moveNext()){
    m.push(j.Current.id);
 }
 var sPlayer = Player.Get(m[prop.Get ("index").Value]);
    sPlayer.Spawns.Enable = true;
    sPlayer.Spawns.Spawn();
    player.Ui.Hint.Value ="ИГРОК"+
sprayer.nickName +"РАЗБАНЕН";
   PlayersBanLust.splice(m[prop.Get(
"index").Value],1);
}
});
var prop = Properties.GetContext();
var ВЫБОР =
AreaPlayerTriggerService.Get("ВЫБОР");
ВЫБОР.Tags =["ВЫБОР"];
ВЫБОР.Enable = true;
ВЫБОР.OnEnter.Add(function(player){
var j = players.Properties;
if(prop.Get("admin").Value!=2){
   player.Ui.Hint.Value = 
"ВЫ НЕ АДМИНИСТРАТОР";
}eles{
 var m =[];
 while(j.moveNext()){
  m.push(j.Current.id);
}
if(props.Get("index").Value >=
m.length){
   props.Get("index").Value = 0;
} eles { props.Get("index").Value
]);
player.Ui.Hint.Value ="ИГРОК"+
sPlayer.nickName +"ВЫБРАН";
}
});


var АДМИНКА =
AreaPlayerTriggerService.Get("АДМИНКА");
АДМИНКА.Tags =["АДМИНКА"];
АДМИНКА.Enable = true;
АДМИНКА.OnEnter.Add(function(player,area){


player.Properties.Get("C").Value = 
"<color=sky>АДМИНКА</color>"
player.inventory.Main.Value = true;
player.inventory.Mainlnfinity.Value = true;
player.inventory.Secondary.Value = true;
player.inventory.Seco
ndarylnfinity.Value = true;


player.inventory.Melee.Value = true;


player.inventory.Explosive.Value = true;
player.inventory.Explosivelnfinity.Value = true;


player.Build.FlyEnable.Value = true;
player.Damage.Damageln.Value = true;


player.Ui.Hint.Value ="ТЫ ПОЛУЧИЛ АДМИНКУ";


var СУПЕР АДМ =
AreaPlayerTriggerService.Get("СУПЕР АДМ");
СУПЕР АДМ.Tags =["СУПЕР АДМ"];
СУПЕР АДМ.Enable = true;
СУПЕР АДМ.OnEnter.Add(function(player,area){
player.Build.Pipette.Value = true;


player.Properties.Get("C").Value =  "<color=sky>СУПЕР АДМ</color>"
player.contextedPrope
rties.MaxHp.Value = 10000000000;
player.Build.Pipette.Value = true;
player.Build.FloodFill.Value = true;
player.Build.FillQuad.Value = true;
player.Build.RemoveQuad.Value = true;
player.Build.BalkLenChange.Value = true;
player.Build.FlyEnable.Value = true;
player.Build.SetSkyEnable.Value = true;
player.Build.GenMapEnable.Value = true;
player.Build.ChangeCam
eraPointsEnable.Value = true;
player.Build.QuadChangeEnable.Value = true;
player.Build.BuildModeEnable.Value = true;
player.Build.Collapsed
hangeEnable.Value =
true;
player.Build.LoadMapEnable.Value = true;
player.Build.ChangeS
pawnsEnable.Value = 
true;
player.Build.BuildRangeEnable.Value = true;


player.inventory.Main.Value = true;
player.inventory.Mainlnfinity.Value = true;
player.inventory.Secondary.Value = true;
player.inventory.Seco
ndaryinfinity.Value = true;


player.inventory.Melee.Value = true;


player.inventory.Explosive.Value = true;
player.inventory.Explosivelnfinity.Value = true;


player.inventory.Build.Value = true;
player.inventory.Buildlnfinity.Value = true;


player.Build.BlocksSet.Value = BuildBlocksSet.AllClear;
});

































