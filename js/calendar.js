const calendarDays = document.getElementById('calendar-days');
    const monthYear = document.getElementById('month-year');
    let currentDate = new Date();

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const today = new Date();

        monthYear.textContent = date.toLocaleString('uz-UZ', { month: 'long', year: 'numeric' });

        // Kalendarning hozirgi kunlarini tozalash
        while (calendarDays.children.length > 7) {
            calendarDays.removeChild(calendarDays.lastChild);
        }

        const firstDayIndex = new Date(year, month, 1).getDay(); // Haftaning birinchi kuni
        const lastDay = new Date(year, month + 1, 0).getDate();

        // Haftaning birinchi kunini belgilash
        const firstDayOfWeek = (firstDayIndex === 0) ? 6 : firstDayIndex - 1;

        // Boshlanishdan oldingi bo'sh joylar
        for (let i = 0; i < firstDayOfWeek; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.classList.add('day');
            calendarDays.appendChild(emptyCell);
        }

        // Kunlarni yaratish
        for (let day = 1; day <= lastDay; day++) {
            const dayCell = document.createElement('div');
            dayCell.classList.add('day');
            dayCell.textContent = day;

            if (
                day === today.getDate() &&
                year === today.getFullYear() &&
                month === today.getMonth()
            ) {
                dayCell.classList.add('today');
            }

            // Yakshanba sanalarini qizil rangda qilish
            if (new Date(year, month, day).getDay() === 0) {
                dayCell.classList.add('red-day');
            }

            calendarDays.appendChild(dayCell);
        }
    }

    function changeMonth(step) {
        currentDate.setMonth(currentDate.getMonth() + step);
        renderCalendar(currentDate);
    }

    renderCalendar(currentDate);
