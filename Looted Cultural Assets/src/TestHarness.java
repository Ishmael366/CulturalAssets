import java.util.ArrayList;

public class TestHarness {

    public TestHarness() {
        // Testing the interface implementation
        System.out.println("Testing Interface Implementation:");
        testInterface();
    }

    // Method to test the interface
    private void testInterface() {
        ArrayList<Describable> describableObjects = new ArrayList<>();

        // Instantiate objects of classes that implement Describable
        Artifact artifact = new Artifact("A123", "Egypt", "Missing");
        Database database = new Database("Artifacts Dataset", "CSV");

        // Add objects to the ArrayList
        describableObjects.add(artifact);
        describableObjects.add(database);

        // Iterate over the ArrayList and call the displayDetails method on each object
        for (Describable obj : describableObjects) {
            obj.displayDetails();
        }
    }

    public static void main(String[] args) {
        new TestHarness();  // Instantiate the TestHarness to run the tests
    }
}
