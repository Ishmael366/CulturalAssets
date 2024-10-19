public class HistoricalDocument extends CulturalAsset {
    private String author;
    private int year;

    // Constructor
    public HistoricalDocument(String origin, String author, int year) {
        super(origin, "Historical Document written by " + author);
        this.author = author;
        this.year = year;
    }

    // Accessor methods
    public String getAuthor() {
        return author;
    }

    public int getYear() {
        return year;
    }

    // Mutator methods
    public void setAuthor(String author) {
        this.author = author;
    }

    public void setYear(int year) {
        this.year = year;
    }

    // Overriding the getDetails method
    @Override
    public String getDetails() {
        return "Historical Document [Author: " + author + ", Year: " + year + ", Origin: " + getOrigin() + "]";
    }

    // toString method
    @Override
    public String toString() {
        return "HistoricalDocument [author=" + author + ", year=" + year + ", origin=" + getOrigin() + "]";
    }
}
