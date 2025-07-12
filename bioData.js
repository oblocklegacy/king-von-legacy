
const bioData = {
  "King Von": {
    name: "Dayvon Daquan Bennett",
    born: "August 9, 1994",
    died: "November 6, 2020",
    origin: "Chicago, Illinois (O’Block)",
    knownFor: "Storytelling rap, 'Crazy Story', signed to Lil Durk’s OTF label.",
    notes: "Von spent years in and out of jail but transitioned into rap after 2018. He was known for raw street storytelling and was working on changing his life through music."
  },
  "Lil Durk": {
    name: "Durk Derrick Banks",
    origin: "Englewood, Chicago",
    knownFor: "Founder of OTF (Only The Family), long-time friend and collaborator of Von.",
    notes: "Lil Durk helped launch King Von’s career and signed him to his label."
  }
};

function showBio(name) {
  const data = bioData[name];
  if (data) {
    alert(`${data.name}\nBorn: ${data.born || 'N/A'}\nFrom: ${data.origin}\n\nKnown For: ${data.knownFor}\n\n${data.notes}`);
  }
}
