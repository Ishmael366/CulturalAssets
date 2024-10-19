public class Timeline {
    private String startDate;
    private String endDate;

    // Parameterized constructor
    public Timeline(String startDate, String endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    // Accessor methods
    public String getStartDate() {
        return startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    // Mutator methods
    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    // toString method
    @Override
    public String toString() {
        return "Timeline [startDate=" + startDate + ", endDate=" + endDate + "]";
    }
}
