let screen = document.getElementById("screen");

        function press(value) {
            if (screen.value === "0") {
                screen.value = value;
            } else {
                screen.value += value;
            }
            }

        function clearScreen() {
            screen.value = "0";
        }

        function deleteLast() {
            if (screen.value.length === 1) {
                screen.value = "0";
            } else {
                screen.value = screen.value.slice(0, -1);
            }
        }

        function calculate() {
            try {
                screen.value = eval(screen.value);
            } catch {
                screen.value = "Error";
            }
        }