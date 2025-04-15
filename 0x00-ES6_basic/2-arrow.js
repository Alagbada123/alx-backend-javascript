export default function getNeighborhoodsList() {
<<<<<<< HEAD
	this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

	const self = this;
	this.addNeighborhood = (newNeighborhood) => {
		self.sanFranciscoNeighborhoods.push(newNeighborhood);
		return self.sanFranciscoNeighborhoods;
	};
=======
	  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
	
	// eslint-disable-next-line @typescript-eslint/no-this-alias
	  const self = this;
	  this.addNeighborhood = (newNeighborhood) => {
		      self.sanFranciscoNeighborhoods.push(newNeighborhood);
		      return self.sanFranciscoNeighborhoods;
		    };
>>>>>>> eb7a684d9b463e7ce36077c1c38510298c8d7ede
}
