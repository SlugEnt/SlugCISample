using System;
using System.Diagnostics.CodeAnalysis;


namespace Daborg69.Utility
{
	// Example of how to exclude a class (could be method also) from code coverage.
	[ExcludeFromCodeCoverage]
	public class Printer
	{
		public Printer () {
			Console.WriteLine("Printing...");
			Console.WriteLine("Still Printing");
			Console.WriteLine("Still Printing...");
			Console.WriteLine("Still Printing...");
			Console.WriteLine("Still Printing...");
			Console.WriteLine("Out  of  Ink!");
			Console.WriteLine("Ink Replaced!");
			Console.WriteLine("Continuing to Print...");
			Console.WriteLine("Still Printing...");
			Console.WriteLine("Still Printing...");
			Console.WriteLine("Still Printing...");
			Console.WriteLine("Stalled...");
			Console.WriteLine("Jammed...");
			Console.WriteLine("Reporting Jam...");
			Console.WriteLine("Ink Low");
			Console.WriteLine("Red Ink Loaded...");
			Console.WriteLine("N Dev");
			Console.WriteLine("Blue Ink Init...");
			Console.WriteLine("Yellow Ink Init...");
			Console.WriteLine("Yellow Ink Init...2");
			Console.WriteLine("Green Ink Init...2");
			Console.WriteLine("Green Ink Out!");
			Console.WriteLine("Green Ink Replenished");
			Console.WriteLine("Broken");
			Console.WriteLine("Broken");
			Console.WriteLine("Broken");
			Console.WriteLine("Fixed");
			Console.WriteLine("Fixed");
			Console.WriteLine("Blink...Blink....");
			Console.WriteLine("Alarm...Alarm...");
		}
	

	}
}
