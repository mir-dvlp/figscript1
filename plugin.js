figma.showUI (
    __html__,
    {width: 400, height: 400}
 );

 figma.ui.onmessage = e => {
    try {
        eval(e)
    } catch (err) {
        console.error(err);
    }
 }