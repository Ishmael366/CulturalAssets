public class CulturalAsset {
    private String origin;
    private String description;

    // Constructor
    public CulturalAsset(String origin, String description) {
        this.origin = origin;
        this.description = description;
    }

    // Accessor methods
    public String getOrigin() {
        return origin;
    }

    public String getDescription() {
        return description;
    }

    // Mutator methods
    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // Overridden method to be customized by subclasses
    public String getDetails() {
        return "CulturalAsset from " + origin + ": " + description;
    }

    // toString method
    @Override
    public String toString() {
        return "CulturalAsset [origin=" + origin + ", description=" + description + "]";
    }
}
