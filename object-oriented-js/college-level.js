  get level () {
    if (this.credits >= 90) {
      return 'Senior';
    } else if (this.credits <= 90 && this.credits >= 61) {
      return 'Junior';
    } else if (this.credits <= 60 && this.credits <= 31) {
      return 'Sophomore';
    } else if (this.credits <= 30) {
      return 'Freshman';
    }
  }
