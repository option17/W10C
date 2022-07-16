function makeOrange(details) {
    details[`target`][`style`][`background-color`] = `orange`;
    }
    let head = document.getElementById(`first`);
    head.addEventListener(`mouseover`, makeOrange);

    // This function is saying when my code with the id of `first` is hovered over, make the background orange.

    function Changes(details) {
        details[`target`][`style`][`color`] = `green`;
        }
        let shoulders = document.getElementById(`second`);
        shoulders.addEventListener(`click`, Changes);

        // This function is saying when my code with the id of second is clicked, change the font color to green.

        function moreChanges(details) {
            details[`target`][`style`][`background-color`] = `blue`;
            }
            let knees = document.getElementById(`hmm`);
            knees.addEventListener('keyup', moreChanges)

           