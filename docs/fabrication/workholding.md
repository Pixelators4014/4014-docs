# Workholding

Workholding is the act of securing work (the part that is currently being machined/worked on) to a machine. In industrial machines, this often determines the rigidity between part and cutter, which in turn determines the quality of the finish and the speeds that can be achieved while cutting.

## Vice

![vice](/fabrication/vice.jpg)
Vice should be the default. If work can fit in a vice and will not bow, then it should be in a vice. They tend to have about 5000 lb of clamping force, which is plenty of clamping pressure for a sane person running a mill (please, still no full slotting titanium, even on a vice, for everyone's sake). Most CNC mills are set up with a vice by default, so it also has one of the fastest setups.

However, sheet and plate metal is hard to put in a vice, becuase it is often much larger than the vice, and tends to bow under the clamping pressure. The rest of the solutions in this doc will be primarily focused on sheet and plate aluminum.

They also come in all shapes and sizes, most notably the movie for a low profile and better work access:
![modvice](/fabrication/modvice.jpg)

### Softjaws

Softjaws are able to hold the widest array of work. They do not need flat surfaces, as the soft jaws can be milled to hold almost any shape:
![soft_jaws](/fabrication/soft_jaws.avif)
They are most commonly made by taking an aluminum soft jaw stock and then milling out the soft jaw stock using a custom toolpath. This is more common in production and large shops. However, for simple low-force applications, soft jaws can also be 3d printed:
![3d_printed_soft_jaws](/fabrication/3d_printed_soft_jaws.png)

## Vacuum Table

### Gasket

Wood gasket for the router:
![gasket](/fabrication/gasket.jpg)
Metal gasket for the mill:
![metal gasket](/fabrication/metal_gasket.jpg)
Gasket based systems tend to have 14 lb/in^2 of downwards force. Gasket based systems also tend to be reinforced with sandpaper to prevent horizontal movment. They work great with large surface areas, but a single hole in the gasketed area will produce a leak and all clamping force will be lost. This is unideal for slotting, pocketing, or drilling, which is most of what we do.

### Through Spoilboard

Industrial routers often come with a spoil board with a vacuum table under it:
![mdf](/fabrication/mdf.jpg)
The spoil board is designed to be cut into (usually about .008" per pass) and is resurfaced every few uses. It is usually made out of MDF or some other cheap semi-porous material. They have less suction than gasket systems but can hold a part with holes in it. They don't work well under small surface areas, so cutting out a profile is usually unideal. In order to cut out a small part from a large sheet on a spoil board with a vacuum, you can contour with tabs:
![tabs](/fabrication/tabs.avif)

Industrial routers, like the Laguna routers, tend to have vacuum tables. They can either be through a material like mdf:

## Screws

Screws are great on wooden spoil boards. They can reinforce a part on a vacuum spoil board or be used as the sole work holding on a nonvacuum spoil board. To use screws, just take existing holes from drilling operations, or make new specific work holding holes and use a wood screw through the aluminum into the spoil board. Here is an example with a wood part screwed into a black mdf spoil board:
![screw](/fabrication/screw.jpg)

## Super Glue and Tape

With this method, you take a scrap part secured with some other method and then attach the work to that scrap part using super glue on painter's tape:
![glue](/fabrication/glue.avif)

More info on what is best to buy can be found here: https://nyccnc.com/super-glue-fixturing/

## Toe Clamps

Toe clamps are some of the most versatile work-holding solutions. They can give great access to the work, almost as good as super glue, with low-profile solutions like this:
![small_clamp](/fabrication/small_clamp.jpg)
They also have a much larger version for purely vertical force. This can be useful for holding down a piece of plate or spoil board directly to a mill's table:
![big_clamp](/fabrication/big_clamp.jpg)

## Binder clips?

YES
![clips](/fabrication/clips.avif)
