public class CulturalAssetModel {
    private String name;
    private String origin;
    private String status;

    public CulturalAssetModel(String name, String origin, String status) {
        this.name = name;
        this.origin = origin;
        this.status = status;
    }

    // Accessor methods
    public String getName() {
        return name;
    }

    public String getOrigin() {
        return origin;
    }

    public String getStatus() {
        return status;
    }

    // Mutator methods
    public void setName(String name) {
        this.name = name;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "CulturalAssetModel [Name=" + name + ", Origin=" + origin + ", Status=" + status + "]";
    }
}
