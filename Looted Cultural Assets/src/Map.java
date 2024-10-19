public class Map {
    private String location;
    private String boundaries;

    // Parameterized constructor
    public Map(String location, String boundaries) {
        this.location = location;
        this.boundaries = boundaries;
    }

    // Accessor methods
    public String getLocation() {
        return location;
    }

    public String getBoundaries() {
        return boundaries;
    }

    // Mutator methods
    public void setLocation(String location) {
        this.location = location;
    }

    public void setBoundaries(String boundaries) {
        this.boundaries = boundaries;
    }

    // toString method
    @Override
    public String toString() {
        return "Map [location=" + location + ", boundaries=" + boundaries + "]";
    }
}
