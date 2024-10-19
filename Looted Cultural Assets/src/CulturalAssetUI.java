import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class CulturalAssetUI extends JFrame {
    private JTextField nameField, originField, statusField;
    private Controller controller;

    public CulturalAssetUI(Controller controller) {
        this.controller = controller;

        nameField = new JTextField(20);
        originField = new JTextField(20);
        statusField = new JTextField(20);

        JButton previousButton = new JButton("Previous");
        JButton nextButton = new JButton("Next");
        JButton addButton = new JButton("Add");
        JButton updateButton = new JButton("Update");
        JButton deleteButton = new JButton("Delete");
        JButton quitButton = new JButton("Quit");

        previousButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                controller.previousAsset();
            }
        });

        nextButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                controller.nextAsset();
            }
        });

        addButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                controller.addAsset(new CulturalAssetModel(nameField.getText(), originField.getText(), statusField.getText()));
            }
        });

        updateButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                controller.updateAsset(new CulturalAssetModel(nameField.getText(), originField.getText(), statusField.getText()));
            }
        });

        deleteButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                controller.deleteAsset();
            }
        });

        quitButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                controller.quitApplication();
            }
        });

        JPanel panel = new JPanel();
        panel.add(new JLabel("Name:"));
        panel.add(nameField);
        panel.add(new JLabel("Origin:"));
        panel.add(originField);
        panel.add(new JLabel("Status:"));
        panel.add(statusField);
        panel.add(previousButton);
        panel.add(nextButton);
        panel.add(addButton);
        panel.add(updateButton);
        panel.add(deleteButton);
        panel.add(quitButton);

        this.setContentPane(panel);
        this.pack();
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public void displayAsset(CulturalAssetModel asset) {
        nameField.setText(asset.getName());
        originField.setText(asset.getOrigin());
        statusField.setText(asset.getStatus());
    }
}
