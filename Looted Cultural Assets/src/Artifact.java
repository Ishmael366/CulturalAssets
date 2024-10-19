public class Artifact extends CulturalAsset implements Describable {
    private String serialNumber;
    private String currentStatus;

    public Artifact(String serialNumber, String origin, String currentStatus) {
        super(origin, "Artifact with serial number " + serialNumber);
        this.serialNumber = serialNumber;
        this.currentStatus = currentStatus;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public String getCurrentStatus() {
        return currentStatus;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public void setCurrentStatus(String currentStatus) {
        this.currentStatus = currentStatus;
    }

    @Override
    public String getDetails() {
        return "Artifact [Serial Number: " + serialNumber + ", Origin: " + getOrigin() + ", Status: " + currentStatus + "]";
    }

    @Override
    public void displayDetails() {
        System.out.println(getDetails());
    }

    @Override
    public String toString() {
        return "Artifact [serialNumber=" + serialNumber + ", origin=" + getOrigin() + ", currentStatus=" + currentStatus + "]";
    }
}
