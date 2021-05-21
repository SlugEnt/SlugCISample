using System;

namespace Daborg69.Fax
{
	public class Faxes
	{
		public Faxes (int n) {
			NumberOfFaxes = n;
		}


		public int NumberOfFaxes { get; set; }

		public string FaxNumber { get; set; }

		public bool SuccessfulConnection { get; set; }


		public void ProcessFax () {
			int x = 0;
			x++;
			x++;
			x++;
			x++;
			x++;
			x++;
		}
	}
}
