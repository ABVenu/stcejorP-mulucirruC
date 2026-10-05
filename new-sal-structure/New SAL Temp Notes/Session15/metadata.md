lecture ID:

Course Name: Certification in Agentic Systems and Design / Software Engineering with AI / Software Development with Applied AI

Target Audience : Students from any backgorund may not be necessarily form tech background


session duration: 1hr  50mins

Session Notes Length: 480 lines to 500 lines max

title: SQL — Window Functions: Ranking

objective: Rank every detail row with ROW_NUMBER, RANK, and DENSE_RANK without collapsing the table.

type of session: mixture of theory + implementation

topics be covered:
Why GROUP BY collapses rows and a window does not; OVER (); PARTITION BY; ORDER BY inside OVER; ROW_NUMBER; RANK; DENSE_RANK; how ties differ. One exam-marks table.

detailed subtopics to be covered:
A window writes a value on each original row; grouping would reduce those rows to summaries
OVER () means one window over the whole result
PARTITION BY restarts the rank inside each subject without dropping rows
ORDER BY inside OVER sets the rank sequence; a final ORDER BY only sorts the printout
ROW_NUMBER always gives a unique number, even when marks are equal
RANK shares a place on a tie and skips the next number
DENSE_RANK shares a place on a tie and does not skip
A tie exists only when the full window ORDER BY treats the rows as equal
