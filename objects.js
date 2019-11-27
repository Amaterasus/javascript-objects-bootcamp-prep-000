<<<<<<< HEAD
var playlist = 
{ 
  LinkinPark: "Leave out all the rest",
  ScarsOnBroadway: "Serious",
  TeganAndSara: "Closer"
};

function updatePlaylist(obj, art, song)
{
  return Object.assign(obj, { [art]: song})
}

function removeFromPlaylist(obj, art)
{
  return delete obj[art];
}
=======
var playlist = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};
>>>>>>> 78dcbd1b8acdcc3efad357138ed5d7b3c30f39b3
